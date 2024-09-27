import React from 'react';
import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278'
     
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA'
      
    },
    {
      nome: 'Data Science',
      cor: '#A6D157'
      
    },
    {
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF'
     
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05'
      
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
      
    },
  ])
  const inicial = [
      {
        nome: 'Rafael Paiva',
        cargo: 'Desenvolvedor front-end',
        imagem: 'http://github.com/paiva737.png',
        time: times[1].nome
      },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador() {
    console.log('deletando colaborador');
  }

  function mudarCorDoTime(cor, nome){
    setTimes(times.map(time =>{
      if(time.nome === nome){
        time.cor = cor
      }
      return time
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
        <Time
        mudarCor = { mudarCorDoTime }
        key={indice}
        time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} />)}
      </section>
      <Rodape />
    </div>
  );
}


export default App;
