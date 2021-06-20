import React, { useState } from 'react'

import DisplayMega from './DisplayMega';

export default props => {

    const [quantidade, setQuantidade] = useState(6);
    const [sorteados, setSorteados] = useState([1, 2, 3, 4, 5, 6]);

    function gerarNumeros(qtde) {

        var numeros = [];
        for (var i = 0; i < qtde; i++) {

            var sorteado;
            do {
                sorteado = parseInt(Math.random() * (100 - 1) + 1);
            } while (numeros.includes(sorteado));

            numeros.push(sorteado);

        }

        return numeros;

    }

    return (
        <div>
            <DisplayMega sorteados={sorteados} />
            <label htmlFor="qtdNumeros">Qtd de números: </label>
            <input id="qtdNumeros" type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            <button
                onClick={() => setSorteados(gerarNumeros(quantidade))}>
                Sortear</button>

        </div>
    );


}