import React from 'react'

const IndiretaFilho = props => {
    const cb = props.quandoClicar;
    const min = 50;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={_ =>  cb('João', gerarIdade(), gerarNerd) }>
                Fornecer informações
            </button>
        </div>
    );
}

export default IndiretaFilho;