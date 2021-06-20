import React from 'react'

export default props => {

    const numeros = props.sorteados.map(sorteado => {
        return (
        <span>
            {sorteado}, 
        </span>
        );
    });

    return (
        <div>
            {numeros}
        </div>
    );
}