import React from 'react';

const ContentBlock = ({ nameBlock, classForBlock, classForName, isRequired, children }) => {
    let nameContainer = null;

    if (isRequired) {
        nameContainer = (
            <div className={ classForName }>
                { nameBlock } <span style={{ color: "#5093E1" }}>*</span>
            </div>
        );
    } else {
        nameContainer = (
            <div className={ classForName }>
                { nameBlock }
            </div>
        );
    }

    return (
        <div className={ classForBlock }>
            { nameContainer }
            <div>
                { children }
            </div>
        </div>
    );
};

export default ContentBlock;