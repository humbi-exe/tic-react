import React from 'react';

const style = {
    background: 'lightYellow',
    border: '4px solid black',
    fontSize: '40px',
    fontWeight: '500',
    cursor: 'pointer',
    outLine: 'none'
}

const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square;