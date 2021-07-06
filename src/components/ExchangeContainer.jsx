import React from 'react';
import ExchangeBlock from './ExchangeBlock';

const ExchangeContainer = ({ classToUse, children, data }) => {
    return (
        <div className={ classToUse }>
            { children }

            <div>
                { data.map((element, index) => {
                    return (
                        <ExchangeBlock key={ index } currency={ element.name } currencyValue={ element.value } />
                    );
                }) }
            </div>
        </div>
    );
};

export default ExchangeContainer;