import React from 'react';
import {CardNumber} from './card-number.jsx';
import {CardDate} from './card-date.jsx';
import {CardUser} from './card-user.jsx';
import {CardCode} from './card-code.jsx'

export const Card = () =>
    <form style={{
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 0,
            maxWidth: 350,
            minWidth: 300,
            padding: 20,
            border: '1px solid #e4e9ee',
            borderRadius: 6,
            boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.10)',
            backgroundColor: '#f7f8f8',

            fontFamily: 'Arial, SansSerif, Tahoma'
        }}>

            <CardNumber />
            <CardDate />
            <CardUser />
            <CardCode />
    </form>;