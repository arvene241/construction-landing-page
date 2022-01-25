import React from 'react';

const Stats = (props) => {
    return (
        <div>
            <h2>{props.stat}</h2>
            <p>{props.title}</p>
        </div>
    )
}

export default Stats;
