import React from 'react';
import "../styles/Modal.css";
import ReactDom from 'react-dom';

const Modal = ({ open, children, onClose, classModal }) => {
    if (!open) return null;
    
    return ReactDom.createPortal(
        <>
            <div className="overlay_styles">
                <div className="btnCloseStyle" onClick={onClose}>
                    <button>
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '10px' }}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.07955 7.97384L6.5751 7.97385L13.9194 7.97385C14.2943 7.9424 14.655 8.12462 14.8522 8.44506C15.0493 8.7655 15.0493 9.1696 14.8522 9.49004C14.655 9.81048 14.2943 9.99271 13.9194 9.96126L7.01087 9.96126L5.99573 9.96126L1.08154 9.96126C0.706677 9.99308 0.345809 9.81122 0.148365 9.49098C-0.0490779 9.17074 -0.0494832 8.76663 0.147317 8.446C0.344117 8.12536 0.704621 7.94277 1.07955 7.97384ZM10.9269 5.97941L7.00988 5.97941L5.99474 5.97941L4.07214 5.97941C3.69724 6.01086 3.33655 5.82864 3.13943 5.5082C2.94231 5.18776 2.94231 4.78365 3.13943 4.46321C3.33655 4.14277 3.69724 3.96055 4.07214 3.992L6.5761 3.992L10.9289 3.992C11.3038 3.96093 11.6643 4.14352 11.8611 4.46415C12.0579 4.78479 12.0575 5.18889 11.86 5.50913C11.6626 5.82937 11.3017 6.01123 10.9269 5.97941ZM7.93528 1.99063L8.00708 1.99063L6.99193 1.99063L7.06373 1.99063C6.68883 2.02208 6.32814 1.83985 6.13102 1.51941C5.93389 1.19897 5.93389 0.794869 6.13102 0.474429C6.32814 0.15399 6.68883 -0.0282333 7.06373 0.00321605L7.5733 0.00321609L7.93727 0.00321613C8.3122 -0.0278546 8.67271 0.154731 8.86951 0.475368C9.06631 0.796004 9.0659 1.20011 8.86846 1.52035C8.67102 1.84059 8.31015 2.02245 7.93528 1.99063Z" fill="#5093E1"/>
                        </svg>
                        Hide filters
                    </button>
                </div>
                <div className={classModal}>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("root")
    );
};
    
export default Modal;
