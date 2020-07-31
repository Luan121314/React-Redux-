import React from 'react';
import './app.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragment from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia'
import FamiliaMembros from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParouImpar from './components/condicional/ParouImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicação/DiretaPai';
import IndiretaPai from './components/comunicação/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Contador_2 from './components/contador#2/Contador';
import MegaSenna from './components/mega/MegaSenna';

export default function (props) {
    return (
        <div className='app' >

            <h1>Fundamentos react </h1>


            <div className='containerCards' >
                <Card titulo='Desafio da Megasenna' color='#72AF65' >
                    <MegaSenna max={200} />
                </Card>

                <Card titulo='#13 Contador#2' color='#628A5'>
                    <Contador_2 numeroInicial={39} numeroPassos={10}  ></Contador_2>
                </Card>

                <Card titulo='#12 Contador' color='#424242' >
                    <Contador numeroInicial={39} numeroPassos={10} ></Contador  >
                </Card>

                <Card titulo='#11 Componente controlado (Input)' color='#E45F56' >
                    <Input></Input>
                </Card>

                <Card titulo='#10 Comunicação indireta' color='#9A5B11' >
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo='#9 Comunicação direta' color='#6D75f4' >
                    <DiretaPai />
                </Card>

                <Card titulo='#8 Renderização condicional' color='#3A2AD2' >
                    <ParouImpar numero={21} ></ParouImpar>
                    <UsuarioInfo usuario={{ nome: 'Leandro' }} ></UsuarioInfo>
                </Card>
                <Card titulo='#7 Tabela Produtos' color='#3A9AD9' >
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo='#06 Lista Alunos' color='#FF4C65' >
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo='#05 Componentes com filhos' color='#00F8F9' >

                    <Familia sobrenome='Bernandes'>
                        <FamiliaMembros nome='Leandro' />
                        <FamiliaMembros nome='Ricardo' />
                        <FamiliaMembros nome='Juliana' />
                        <FamiliaMembros nome='Clarice' />
                    </Familia>
                </Card>

                <Card titulo='#04 Desafio aleatório' color='#FA6900' >
                    <Aleatorio min={200} max={500} />
                    <Aleatorio min={200} max={500} />
                    <Aleatorio min={200} max={500} />

                </Card>

                <Card titulo='#03 Fragmento' color='#E94C6F'>

                    <Fragment />
                </Card>

                <Card titulo='#02 Componentes com parametro' color='#E8B71A' >

                    <ComParametro
                        titulo='Esse é o titulo'
                        subtitulo='subtitulo' />
                </Card>

                <Card titulo='#01 Primeiro' color='#588C73'>
                    <Primeiro />

                </Card>

            </div>
        </div>
    )
}