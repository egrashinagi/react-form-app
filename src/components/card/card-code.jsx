import React from 'react';

const cardCodeStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0 10px 10px 0',
    color: '#a7b2c1',
    fontWeight: '100',
    fontSize: '16px'
};

export const CardCode = () =>
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={cardCodeStyle}>CCV/CVC2 код</div>
            <input type="password" placeholder="CCV/CVС2"/>
        </div>;