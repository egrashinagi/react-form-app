import React from 'react';
import {CardNumberInput} from './card-number-input';

const cardNumberTitleStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0 10px 10px 0',
    color: '#a7b2c1',
    fontWeight: '100',
    fontSize: '16px'

};

export const CardNumber = () =>
    (<React.Fragment>
        <div style={cardNumberTitleStyle}>Номер карты
        </div>
        <div className="inputs">
            <CardNumberInput placeholder="1234"/>
            <CardNumberInput placeholder="5678"/>
            <CardNumberInput placeholder="9012"/>
            <CardNumberInput placeholder="3456"/>
        </div>
    </React.Fragment>);