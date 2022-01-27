import React from 'react';

const Reasons = (props) => {
    return (
        <div className="construction-reason">
            <div className="construction-reason-id">
                <h1>{props.id}</h1>
            </div>
            <div className="construction-reason-description">
                <p>{props.description}</p>
            </div>
        </div>
    )
};

export default Reasons;
