import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScrollToShow from 'components/ui/ScrollToShow';
import Shape from 'components/ui/Shape';
import HoverTranslate from 'components/ui/HoverTranslate';
import { getThemeColors, isMobileBrowser, isSafariBrowser } from 'utils/Functions';
import { EASTER_EGG } from 'utils/CommonRenders';

function Pastimes(props) {
    const [ showEasterEgg, setShowEasterEgg ] = useState(false);
    const pageText = {
        hoverTranslate: {
            english: {
                title: 'Japanese',
                description: 'I have been learning Japanese for a little over a year. It\'s a lot of fun!'
            },
            japanese: {
                title: (
                    <div className={isMobileBrowser({ includeTablets: true }) ? 'underline-extra-space' : ''}>
                        日本語
                    </div>
                ),
                description: 'ちょっと 一年 以上 日本語 を 学んで います。楽しい です よ！'
            }
        },
        otherPastimes: [
            'Open-source projects',
            !showEasterEgg ? 'Cooking' : 'I just throw stuff in a pot and hope it tastes okay',
            !showEasterEgg ? 'Rock climbing' : 'Well... at least I used to go',
            !showEasterEgg ? 'Playing guitar' : 'Kind of, here and there'
        ]
    };
    const themeColors = getThemeColors();
    const { hoverTranslate: { english, japanese }, otherPastimes } = pageText;

    // Safari doesn't correctly consider `foreignObject` as an SVG rendering root
    // so use the old way of manually positioning HoverTranslate over Shape but
    // only in Safari (see: https://bugs.webkit.org/show_bug.cgi?id=165516).
    // Add 'mx-4' to `animationCls` to add margins to the divs that are nested
    // inside the `div.absolute-center` elements and a font-size of 14px since
    // that's what is rendered on all other browsers.
    const renderedHoverTranslateInShape = isSafariBrowser() ? (
        <React.Fragment>
            <Shape sides={8} fill={themeColors.primary} />
            <HoverTranslate
                className={'text-light'}
                animationCls={'animated fade duration-5 mx-4'}
                english={english}
                japanese={japanese}
                aria={{
                    style: { fontSize: '14px' }
                }}
            />
        </React.Fragment>
    ) : (
        <Shape
            sides={8}
            fill={themeColors.primary}
            htmlChildrenFontReductionOptions={{ reduceByPx: 1 }} // only 1 HoverTranslate present
            htmlChildren={(resizeTextRef, foreignObjectBoundingClientRectInWindow) => (
                <HoverTranslate
                    className={'text-light'}
                    english={english}
                    japanese={japanese}
                    passedRef={resizeTextRef}
                    boundingClientRectForHover={foreignObjectBoundingClientRectInWindow}
                />
            )}
        />
    );

    return (
        <div className={'bg-light w-100 pb-5'}>
            <ScrollToShow addClasses={'show'} distributeClasses={props.titleAnimationCls}>
                <div className={'p-5'}>
                    <h1 className={'d-inline-block'} onClick={() => setShowEasterEgg(!showEasterEgg)}>
                        Pastimes
                    </h1>
                    {showEasterEgg && (
                        <React.Fragment>
                            {' '}
                            {EASTER_EGG}
                        </React.Fragment>
                    )}
                </div>
            </ScrollToShow>
            <div className={'container'}>
                <div className={'row mb-5'}>
                    <div className={'col-sm-6 mb-4'}>
                        <ScrollToShow addClasses={'slide-in-bottom show'} distributeClasses={'animated duration-15'}>
                            <div>
                                {renderedHoverTranslateInShape}
                            </div>
                        </ScrollToShow>
                    </div>
                    <div className={'col-sm-6'}>
                        <div className={'row'}>
                            <ScrollToShow addClasses={'slide-in-bottom show'} distributeClasses={'animated duration-15'} distributeSimultaneously={0.5}>
                                {otherPastimes.map((project, index) => {
                                    const sides = 7 - index; // decrease each entry by 1, starting from Japanese at 8
                                    const rotation = (sides % 2) * -90;

                                    return (
                                        <div className={'col-sm-6'} key={index}>
                                            <Shape
                                                htmlChildren={project}
                                                htmlChildrenWrapperCls={'text-light'}
                                                htmlChildrenFontReductionOptions={{
                                                    // reduce by number of pastimes to shrink how much space they take up
                                                    reduceByPx: pageText.otherPastimes.length
                                                }}
                                                sides={sides}
                                                fill={themeColors.primary}
                                                rotation={rotation}
                                            />
                                        </div>
                                    );
                                })}
                            </ScrollToShow>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Pastimes.propTypes = {
    titleAnimationCls: PropTypes.string
};

Pastimes.defaultProps = {
    titleAnimationCls: ''
};

export default Pastimes;
