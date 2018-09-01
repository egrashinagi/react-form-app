import React from 'react';
import {CardNumber} from './card-number.jsx'

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
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '0 10px 10px 0',
                    color: '#a7b2c1',
                    fontWeight: '100',
                    fontSize: '16px'

                }}>Срок действия
                </div>
                <input onChange={() => {
                }} type="text" name="month" list={"month"} className="inputsItem inputsItemSmall"/>
                <datalist id="month">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </datalist>
                <input onChange={() => {
                }} type="text" name="year" list={"year"} className="inputsItem inputsItemSmall"/>
                <datalist id="year">
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </datalist>
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