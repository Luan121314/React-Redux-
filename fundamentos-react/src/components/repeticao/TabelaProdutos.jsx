import React from 'react';
import Produtos from '../../data/produtos';
import './TabelaProdutos.css'

const TabelaProdutos = () => (
    <table border='1' className='TProdutos'>
        <thead>
            <tr style={{
                border: '1px',
                borderColor: '#000'

            }
            } >
                <th>#</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
        </thead>

        <tbody>
            {Produtos.map(produto => (
                <tr key={produto.id} >
                    <td>{produto.id}</td>
                    <td>{produto.nomeProduto}</td>
                    <td> R$  {produto.preco}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default TabelaProdutos;