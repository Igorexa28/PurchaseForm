import React from 'react';

const LinkToOtherPage = ({ linkToPage, namePage }) => {
    return (
        <div className="linkContainer">
            <a href={linkToPage} className="linkToPath">
                <svg width="6" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", marginBottom: "-1.5px", marginRight: "5px" }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.18579 8.70739L0.296786 5.81314C-0.0979533 5.34733 -0.0979533 4.66514 0.296786 4.19934L3.18579 1.30509C3.45266 1.03767 3.84222 0.932661 4.20771 1.02962C4.5732 1.12657 4.85909 1.41076 4.95771 1.77514C5.05632 2.13951 4.95266 2.52871 4.68579 2.79613L2.46179 5.00774L4.68079 7.21635C4.957 7.48096 5.06825 7.87395 4.9716 8.24369C4.87495 8.61343 4.58551 8.9021 4.21497 8.99832C3.84444 9.09453 3.45073 8.98324 3.18579 8.70739Z" fill="#5093E1"/>
                </svg>
                { namePage }
            </a>
        </div>
    );
};

export default LinkToOtherPage;