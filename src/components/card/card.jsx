import React from 'react';
import {CardNumber} from './card-number.jsx'
import {CardDate} from './card-date.jsx'

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
        }

    }>
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <CardNumber />
            <div className="inputs">
                <CardDate/>
            </div>
            <div className="inputs">
                <input type="text" placeholder="Держатель карты" className="inputsItem"/>
            </div>
            <div className="inputs inputsCcv">
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '0 10px 10px 0',
                    color: '#a7b2c1',
                    fontWeight: '100',
                    fontSize: '16px'

                }}>CCV/CVC2 код
                </div>
                <input type="password" placeholder="CCV/CVС2"
                       className="inputsItem inputsItemMiddle inputsItemWidthXl"/>
            </div>
        </div>
    </form>;