import React from 'react';

export default function Aleatorio(props) {
    const random = Math.floor(Math.random() * (props.max - props.min) ) + props.min;

    return (
        <h1>{ random }</h1>
    );
}