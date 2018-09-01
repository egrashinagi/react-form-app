import React from 'react';

export const Card = () =>
    <form className="card">
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '0 10px 10px 0',
                color: '#a7b2c1',
                fontWeight: '100',
                fontSize: '16px'

            }}>Номер карты</div>
            <div className="inputs">
                <input type="text" className="inputsItem inputsItemSmall" placeholder="1234"/>
                <input type="text" className="inputsItem inputsItemSmall" placeholder="5678"/>
                <input type="text" className="inputsItem inputsItemSmall" placeholder="9012"/>
                <input type="text" className="inputsItem inputsItemSmall" placeholder="3456"/>
            </div>
            <div className="inputs">
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    padding: '0 10px 10px 0',
                    color: '#a7b2c1',
                    fontWeight: '100',
                    fontSize: '16px'

                }}>Срок действия</div>
                <input onChange={()=>{}} type="text" name="month" list={"month"} className="inputsItem inputsItemSmall"/>
                <datalist id="month">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </datalist>
                <input onChange={()=>{}} type="text" name="year" list={"year"} className="inputsItem inputsItemSmall"/>
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

                }}>CCV/CVC2 код</div>
                <input type="password" placeholder="CCV/CVС2" className="inputsItem inputsItemMiddle inputsItemWidthXl"/>
            </div>
        </div>
    </form>;