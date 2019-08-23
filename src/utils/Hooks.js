import React, { useState, useEffect, useRef } from 'react';
import { elementIsInClickPath } from 'utils/Functions';

export function UseContext({ Context, defaultValue = null, children }) {
    const [ value, setValue ] = useState(defaultValue);

    return (
        <Context.Provider value={{ value, setValue }}>
            {children}
        </Context.Provider>
    );
}

export function useHover() {
    const [ isHovered, setIsHovered ] = useState(false);
    const ref = useRef(null);

    function handleMouseMove({ pageX, pageY }) {
        if (ref.current) {
            const { pageXOffset, pageYOffset } = window;
            let { top, bottom, left, right } = ref.current.getBoundingClientRect();

            top = top + pageYOffset;
            bottom = bottom + pageYOffset;
            left = left + pageXOffset;
            right = right + pageXOffset;

            if (pageX <= right && pageX >= left && pageY <= bottom && pageY >= top) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        }
    }

    useEffect(() => {
        if (ref.current) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [ref.current]);

    return [ ref, isHovered ];
}

export function useWindowEvent(eventType, eventField, initialValue = null) {
    const [ value, setValue ] = useState(initialValue);

    function handleEvent(event) {
        setValue(event[eventField]);
    }

    useEffect(() => {
        window.addEventListener(eventType, handleEvent);

        return () => {
            window.removeEventListener(eventType, handleEvent);
        };
    }, []);

    return [ value, setValue ];
}

export function useKeyboardEvent(type = 'down') {
    return useWindowEvent(`key${type}`, 'key');
}

export function useClickPath() {
    return useWindowEvent('click', 'path', []);
}

/**
 * A root-close hook that triggers closing an element based on if the user clicks outside the bounds
 * of the acceptable element or if they press the "Escape" key
 *
 * @param {ElementProps} acceptableElement - Element that marks the bounds of what is acceptable to click on
 * @param {ElementProps} closeElement - Element that marks the bounds of what should trigger the root close
 * @returns {[boolean, function]} - If the user triggered the root close and the function to reset the trigger
 */
export function useRootClose(acceptableElement, closeElement) {
    const [ keyDown, setKeyDown ] = useKeyboardEvent();
    const [ clickPath, setClickPath ] = useClickPath();

    const pressedEscape = keyDown === 'Escape';
    const clickedOnElementWithinBounds = elementIsInClickPath(acceptableElement, clickPath);
    const clickedOnElementOutsideBounds = elementIsInClickPath(closeElement, clickPath);
    const rootWasClosed = pressedEscape || (clickedOnElementOutsideBounds && !clickedOnElementWithinBounds);

    const resetRootClosed = () => {
        setKeyDown(null);
        setClickPath([]);
    };

    return [ rootWasClosed, resetRootClosed ];
}

export function Hooked({ hook, children }) {
    return children(hook())
}