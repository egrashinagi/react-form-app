import React from 'react';

const cardDateStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0 10px 10px 0',
    color: '#a7b2c1',
    fontWeight: '100',
    fontSize: '16px'
};
const cardNumberInputStyle = {
    height: 40,
    width: 60,
    backgroundColor: 'white',
    border: '1px solid #e4e9ee',
    borderRadius: 3,
    outlineStyle: 'none',
    fontSize: 14,
    color: '#353535',
    textAlign: 'left',
    paddingLeft: 5,
    margin: '10px 10px 10px 0'
};

const months = [1, 2, 3, 4, 5];
const monthOptions = months.map(item => <option key={item} value={item}>{item}</option>);

const years = [2011, 2012, 2013, 2014, 2014];
const yearsOptions = years.map(item => <option key={item} value={item}>{item}</option>);

export const CardDate = () =>
    (<React.Fragment>
        <div style={cardDateStyle}>Срок действия</div>
        <div>
            <select style={cardNumberInputStyle} id="month">{monthOptions}</select>
            <select style={cardNumberInputStyle} id="year">{yearsOptions}</select>
        </div>
    </React.Fragment>);