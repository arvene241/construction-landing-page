import React from 'react';
import './button.css';

const Button = (props) => {
    let title = props.title;

    const buttonStyle = {
        background: props.background,
        border: props.border,
        color: props.color,
        cursor: "pointer",
        boxShadow: props.box_shadow,
    };

    return (
        <button className="construction-button" style={buttonStyle}>
            {title}
        </button>
    )
}

export default Button;
