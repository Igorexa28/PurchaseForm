import React from 'react';

const ExchangeBlock = ({ currency, currencyValue }) => {
    return (
        <div>
            <div>{ currency }</div>
            <div>
                <input type="text" value={ currencyValue } disabled/>
            </div>
        </div>
    );
};

export default ExchangeBlock;