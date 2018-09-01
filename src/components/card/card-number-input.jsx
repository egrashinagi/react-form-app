import React from 'react';

const cardNumberInputStyle = (props) => {
    return {
        height: 40,
        width: props.width || 65,
        border: '1px solid #e4e9ee',
        borderRadius: 3,
        outlineStyle: 'none',
        fontSize: 14,
        color: '#353535',
        textAlign: 'left',
        paddingLeft: 5,
        margin: '10px 10px 10px 0'
    }
};

export const CardNumberInput = (props) =>
    <input
        type="text"
        style={cardNumberInputStyle(props)}
        placeholder={props.placeholder || null}
    />;
