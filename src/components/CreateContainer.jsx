import React from 'react';

const CreateContainer = ({ totalSum }) => {
    return (
        <div className="fifthSection">
            <div>
                <button onClick={() => alert('Event was created!')}>Create</button>
            </div>
            <div>
                Total: <span>{ totalSum } UAH</span>
            </div>
        </div>
    );
};

export default CreateContainer;