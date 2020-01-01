import React from 'react';
import Image from 'components/ui/Image';
import { isMobileBrowser } from 'utils/Functions';
import 'styles/SplashSection.scss';

function SplashSection() {
    const pageText = {
        welcomeTitle: "Hey there, I'm Devon!"
    };
    const textSize = isMobileBrowser() ? 'display-5' : 'display-4';
    const DisabledTextBoldOnMobile = isMobileBrowser() ? React.Fragment : 'strong';
    const renderedTextOnShadow = (
        <div className={'container'}>
            <div className={'row justify-content-center'}>
                <div className={'col-sm-10'}>
                    <div className={'bg-dark-fadeout rounded w-80 m-auto py-2 px-3'}>
                        <h1 className={`text-white ${textSize}`}>
                            <DisabledTextBoldOnMobile>
                                {pageText.welcomeTitle}
                            </DisabledTextBoldOnMobile>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
    const absoluteSpacedContainerClasses = 'text-center position-absolute w-100';
    const renderedAbsoluteSpacedContainer = (
        <React.Fragment>
            <div className={'d-block d-sm-none'}>
                <div className={`${absoluteSpacedContainerClasses} top-15`}>
                    {renderedTextOnShadow}
                </div>
            </div>
            <div className={'d-none d-sm-block'}>
                <div className={`${absoluteSpacedContainerClasses} top-20`}>
                    {renderedTextOnShadow}
                </div>
            </div>
        </React.Fragment>
    );

    return (
        <div className={'overflow-hidden'}>
            <Image
                className={'full-screen'}
                image={'blue_horizon.svg'}
                fluidImage={false}
            />
            {renderedAbsoluteSpacedContainer}
        </div>
    );
}

export default SplashSection;
