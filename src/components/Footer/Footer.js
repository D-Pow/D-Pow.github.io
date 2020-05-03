import React, { useState } from 'react';
import FlipCard from 'components/ui/FlipCard';
import { EasterEgg, SRC_CODE } from 'utils/CommonRenders';

function Footer(props) {
    const [ showSrcCode, setShowSrcCode ] = useState(false);
    const defaultText = [ 'There are 3 easter eggs on this site.', 'Can you find them all?' ];
    const easterEggText = [ <React.Fragment>You just discovered the {SRC_CODE}!</React.Fragment>, '' ];

    const renderTitleContent = ([ textLine1, textLine2 ]) => (
        <React.Fragment>
            <div className={'d-block h5 text-dark'}>{textLine1}</div>
            <div className={'d-block h5 text-dark'}>{textLine2}
                <EasterEgg onClick={() => setShowSrcCode(!showSrcCode)} />
            </div>
        </React.Fragment>
    );

    return (
        <footer className={'bg-light py-3 w-100'}>
            <FlipCard
                isFlipped={showSrcCode}
                showDefault={renderTitleContent(defaultText)}
                showOnClick={renderTitleContent(easterEggText)}
            />
        </footer>
    );
}

export default Footer;
