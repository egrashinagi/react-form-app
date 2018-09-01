import React from 'react';

const cardCodeStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0 10px 10px 0',
    color: '#a7b2c1',
    fontWeight: '100',
    fontSize: '16px'
};

const cardNumberInputStyle = {
    height: 40,
    width: 80,
    border: '1px solid #e4e9ee',
    borderRadius: 3,
    outlineStyle: 'none',
    fontSize: 14,
    color: '#353535',
    textAlign: 'left',
    paddingLeft: 5,
    margin: '10px 10px 10px 0'
};

export const CardCcv = () =>
    <React.Fragment>
        <div style={{backgroundColor: 'gray', width: 200, height: 50, marginRight: -20}}/>
        <div style={cardCodeStyle}>CCV/CVC2 код</div>
        <input style={cardNumberInputStyle} type="password"/>
    </React.Fragment>;