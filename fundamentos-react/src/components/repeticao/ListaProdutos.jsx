import React from 'react';
import produtos from '../../data/produtos';


const produtosLI = produtos.map((produto) => {
    return (
        <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>R$ {produto.preco}</td>
        </tr>
    );
});

export default (props) => {

    return (
        <table border="1">
            <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
            <tbody>
                {produtosLI}
            </tbody>
        </table>
    );

}