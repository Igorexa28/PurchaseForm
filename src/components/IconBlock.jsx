import React from 'react';

const IconBlock = ({ svg, classToUse }) => {
    let iconToShow = null;

    if (classToUse === "mainIconOfMenu") {
        iconToShow = (
            <div>
                <img src={ svg } className={ classToUse } alt="icon" />
                <hr className="horLineMain" />
            </div>
        );
    } else if ( classToUse === "iconOfMenu" ) {
        iconToShow = (
            <div>
                <img src={ svg } className={ classToUse } alt="icon" />
            </div>
        );
    }

    return (
        <>
            { iconToShow }
        </>
    );
};

export default IconBlock;