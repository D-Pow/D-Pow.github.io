import { COLORS, MOBILE_BROWSER_REGEX, MOBILE_OR_TABLET_REGEX } from './Constants';
import { themeColors, gridBreakpoints } from 'styles/Common.scss';

/**
 * Determines if the host browser is a mobile device.
 * Optionally, include the following in the check:
 * 1) Tablets
 * 2) If the browser is on a mobile device _and_ the screen is smaller than
 *    Bootstrap's small screen breakpoint. This handles the case where the
 *    browser is a mobile browser but it's set in landscape mode: if `true`,
 *    then will only return `true` if both mobile device and small screen, whereas
 *    if `false`, then will return `true` regardless of screen size.
 *
 * @param {Object} includeOptions - Optional toggling of factors to include
 * @param {boolean} [includeOptions.includeTablets=false] - If tablets should be included in the check
 * @param {boolean} [includeOptions.onlyXsScreenSizes=false] - If screen widths greater than Bootstrap's `sm` should be excluded
 * @returns {boolean} - If the mobile browser is on a mobile device after applying the chosen options
 */
export function isMobileBrowser({ includeTablets = false, onlyXsScreenSizes = false } = {}) {
    const regex = includeTablets ? MOBILE_OR_TABLET_REGEX : MOBILE_BROWSER_REGEX;
    const isMobileBrowser = regex.test(navigator.userAgent || navigator.vendor || window.opera);

    if (onlyXsScreenSizes) {
        const screenIsSmallerThanSmBreakpoint = window.innerWidth < getGridBreakpoints().sm;

        return isMobileBrowser && screenIsSmallerThanSmBreakpoint;
    }

    return isMobileBrowser;
}

export function isSafariBrowser() {
    return window.safari != null || navigator.vendor.toLocaleLowerCase().includes('apple');
}

/**
 * Determines if the browser is made from Microsoft. Automatically includes IE but selectively includes Edge.
 *
 * @param {boolean} includeEdge - If Edge should be included in the calculation
 * @returns {boolean} - If the browser is IE (or optionally Edge)
 */
export function isMicrosoftBrowser(includeEdge = true) {
    const userAgents = [
        'trident',  // IE 11
        'msie'      // IE < 11
    ];

    if (includeEdge) {
        userAgents.push('edge');
    }

    const browserRegex = `(${userAgents.join('|')})`;

    return Boolean(navigator.userAgent.toLowerCase().match(new RegExp(browserRegex)));
}

/**
 * Gets the string representation of a single React node

 * @param {Node} child - Child whose name will be retrieved
 * @returns {string} - The string representation of the node
 */
export function getChildName(child) {
    // child.type.name for React.Component
    // child.type for HTML elements
    return child.type.name || child.type;
}

/**
 *
 * @param {Node} child - Child whose type to check
 * @param {(Node|string)} component - What to compare the child to (React.Component or string representation of name)
 * @returns {boolean} - If the type of the child matches that of the the specified component
 */
export function childIsOfType(child, component) {
    return (child.type === component) || (getChildName(child) === component);
}

export function childIsReactElement(child) {
    return typeof child.type === 'function';
}

/**
 * Asynchronously imports the specified image from the 'assets/' folder.
 * Optionally returns the resolved image data encoded with Base64.
 * Since this uses dynamic imports, images are cached, so multiple calls
 * for the same asset don't need to be memoized.
 *
 * @param {string} image - Image file name under 'assets/'
 * @param {boolean} [base64=false] - Return base64-encoded image data instead of image src path
 * @returns {Promise<string>} - Path of the image (base64=false) or Base64-encoded image data (base64=true)
 */
export async function importImageAsync(image, base64 = false) {
    if (image != null && image !== '') {
        try {
            const module = await import(`assets/${image}`);
            const imageSrc = module.default;

            if (base64) {
                return fetch(imageSrc).then(res => res.blob()).then(blob => new Promise((res, rej) => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        res(reader.result);
                    };
                    reader.onerror = () => {
                        rej(); // error handled below
                    };
                    reader.readAsDataURL(blob);
                }));
            }

            return imageSrc;
        } catch(error) {} // default return below handles error case
    }

    throw new Error(`${image} was not found`);
}

/**
 * Checks if all fields passed into the function exist nested
 * inside each other. This does not check if multiple
 * fields exist in a given level inside the object, only that fields
 * exist inside other fields.
 * If a field exists, but is null or undefined, then this will
 * return false.
 *
 * @param {Object} obj - Object to check validity of nested fields, e.g. network response or ref
 * @param {...string} nestedFields - Spread of nested fields to check in order
 * @returns {boolean} If the obj contains all given nested fields and they are not null/undefined
 */
export function validateObjNestedFields(obj, ...nestedFields) {
    const fieldsArray = (nestedFields[0] instanceof Array) ? nestedFields[0] : nestedFields;
    const responseExists = obj != null;

    if (fieldsArray.length === 0) {
        return responseExists;
    }

    const nextField = fieldsArray[0];

    return (
        responseExists
        && obj.hasOwnProperty(nextField)
        && validateObjNestedFields(obj[nextField], fieldsArray.slice(1))
    );
}

/**
 * Attempts to parse an object into a vanilla JavaScript object literal.
 *
 * @param {*} obj - Any type of object
 * @returns {(Object|*)} - Vanilla JavaScript object literal or original object on failure
 */
export function attemptParseObjLiteral(obj) {
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch {
        return obj;
    }
}

/**
 * Gets the path from the clicked element to the root.
 *
 * @param {Object} event - Click Event
 * @returns {[HTMLElement]} - Path from clicked element to the root, including `document` and `window`
 */
export function getClickPath(event) {
    if (!event || (Array.isArray(event) && event.length === 0)) {
        return [];
    }

    if (event.path) {
        return event.path;
    }

    // support for browsers without clickEvent.path
    const clickPath = [];
    let element = event.target;

    while (element) {
        clickPath.push(element);
        element = element.parentElement;
    }

    clickPath.push(document, window);

    return clickPath;
}

/**
 * HTML element properties object used in searching for an element
 *
 * @global
 * @typedef {Object} ElementProps
 * @property {string} attribute - Attribute of HTML element to compare the value to
 * @property {string} value - Value of the desired HTML element to search for
 */

/**
 * Determines if a click-path generated by an onClick event contains a given element.
 *
 * @param {string} attribute - Attribute of HTML element to compare the value to
 * @param {string} value - Value of the desired HTML element to search for
 * @param {[HTMLElement]} clickPath - onClick event's `path` value
 * @returns {boolean} - If the element described by `attribute` and `value` exists in the click-path
 */
export function elementIsInClickPath({ attribute, value }, clickPath) {
    let elementIsInPath = false;

    for (let element of clickPath) {
        if (element instanceof HTMLElement) {
            const elemAttr = element.getAttribute(attribute);

            if (elemAttr && elemAttr.includes(value)) {
                elementIsInPath = true;
                break;
            }
        }
    }

    return elementIsInPath
}

export function resetWindowScroll() {
    window.scrollTo(0, 0);
}

/**
 * Parses a map into a JS object. Every value for any key will be a string
 *
 * @param {string} scssMapStr - String imported from a .scss file
 * @returns {Object} - The parsed SCSS object
 */
export function parseScssMap(scssMapStr) {
    return JSON.parse(
        scssMapStr
            .replace('(', '{')
            .replace(')', '}')
            // JSON values: colon + space, bunch of word characters followed by a comma or bracket
            .replace(/: ([^,}]+)([,}])/g, ': "$1"$2')
            // JSON keys: space or bracket as first character, not already a string, anything not colon or
            // space (rules out JSON values), ended by colon
            .replace(/([\s{])(?!")([^:\s]+)+:/g, '$1"$2":')
    );
}

export function getThemeColors() {
    return parseScssMap(themeColors);
}

export function getGridBreakpoints(parsePxStrToNum = true) {
    const mapWithPxInStr = parseScssMap(gridBreakpoints);

    if (parsePxStrToNum) {
        return Object.keys(mapWithPxInStr).reduce((valsAsNum, breakpointName) => {
            valsAsNum[breakpointName] = asNumber(mapWithPxInStr[breakpointName]);

            return valsAsNum;
        }, {});
    }

    return mapWithPxInStr;
}

/**
 * Gets the animation duration time in milliseconds from the CSS className string
 * containing .duration-XX
 *
 * @param {string} className - CSS className to search for .duration-XX
 * @returns {(boolean|number)} - The duration time in ms or false if .duration-XX not found in className
 */
export function getDurationTimeMsFromClassName(className) {
    const durationTimeCssClass = new RegExp('(duration-)(\\d+)');
    const durationTimeMatch = className.match(durationTimeCssClass);

    if (durationTimeMatch) {
        // .duration-XX is (XX * 0.1 seconds) so the milliseconds value is XX/10*1000
        return Number(durationTimeMatch[2]) * 100;
    } else {
        return false;
    }
}

export function asNumber(str) {
    return Number(str.replace(/[^\d.]/g, ''));
}

export function randomNumber(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }

    min = Number(min);
    max = Number(max);
    if (isNaN(min) || isNaN(max)) {
        return Math.random();
    }

    return (Math.random() * (max - min)) + min;
}

export function randomColor(colorsToAvoid, onlyColors = null) {
    let forbiddenColors;
    if (colorsToAvoid == null) {
        forbiddenColors = [''];
    } else if (typeof(colorsToAvoid) === 'string') {
        forbiddenColors = [colorsToAvoid];
    } else {
        forbiddenColors = colorsToAvoid;
    }

    const themeColorsObj = getThemeColors(); // e.g. { primary: "#ffffff" }
    const themeColorNames = Object.keys(themeColorsObj);
    const validColors = onlyColors ? onlyColors : COLORS.concat(themeColorNames);

    let chosenColor;
    do {
        chosenColor = validColors[Math.floor(randomNumber(validColors.length))];
    } while(forbiddenColors.includes(chosenColor) || forbiddenColors.includes(themeColorsObj[chosenColor]));

    // If chosenColor is a theme color, the returned value will be a hex so that it can be used in any CSS field
    // Thus, forbiddenColors will need to search the hex value instead of the named value
    if (themeColorNames.includes(chosenColor)) {
        chosenColor = themeColorsObj[chosenColor];
    }

    return chosenColor;
}
