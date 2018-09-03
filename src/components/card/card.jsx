import React from 'react';
import {CardNumber} from './card-number.jsx';
import {CardDate} from './card-date.jsx';
import {CardHolder} from './card-holder.jsx';
import {CardCcv} from './card-ccv.jsx'

const common = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    width: 380,
    height: 240,
    padding: 20,
    border: '1px solid #e4e9ee',
    borderRadius: 6,
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.10)',
    backgroundColor: '#f7f8f8',
    fontFamily: 'Arial, SansSerif, Tahoma'

};

const cardTopStyle = {
    ...common,
    zIndex: 20,
};

const cardBottomStyle = {
    ...common,
    alignItems: 'flex-end',
    zIndex: 10,
    top: 30,
    left: 160
};

export const Card = () =>
    <div style={{position: 'relative'}}>
        <div style={cardTopStyle}>
            <CardNumber />
            <CardDate />
            <CardHolder />
        </div>
        <div style={cardBottomStyle}>
            <CardCcv />
        </div>
    </div>;