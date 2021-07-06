import React from 'react';

const CustomSelect = ({ data, classToUse, id, handleChange, isRequired }) => {
    const options = data.map((element, index) => {
        return (
            <option key={ index } value={ element.value } >{ element.name }</option>
        );
    });

    return (
        <div>
            <select id={ id } className={ classToUse } required={ isRequired } onChange={ handleChange }>
                { options }
            </select>
        </div>
    );
};

export default CustomSelect;