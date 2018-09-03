import React from 'react';

const cardNumberInputStyle = {
    height: 40,
    width: 320,
    border: '1px solid #e4e9ee',
    borderRadius: 3,
    outlineStyle: 'none',
    fontSize: 14,
    color: '#353535',
    textAlign: 'left',
    paddingLeft: 5,
    margin: '10px 10px 10px 0'
};

export const CardHolder = () => <input style={cardNumberInputStyle} type="text" placeholder="Держатель карты"/>;