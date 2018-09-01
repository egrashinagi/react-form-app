import React from 'react';

const cardDateStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0 10px 10px 0',
    color: '#a7b2c1',
    fontWeight: '100',
    fontSize: '16px'
};

export const CardDate = () =>
    (<React.Fragment>
        <div style={cardDateStyle}>Срок действия</div>
        <select id="month" className="inputsItem inputsItemSmall">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <select id="year" className="inputsItem inputsItemSmall">
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    </React.Fragment>);