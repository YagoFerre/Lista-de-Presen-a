import React, { useState, useEffect } from 'react';
import './style.css'
import {Card} from '../../Components/card'

function Home() {
const [studentName, setStudentName] = useState();//Estado que faz ligação com import React, { useState } from 'react';
const [student, setStudent] = useState([]);//Neste estado eu quero armazenar os estudantes da minha lista de presença.

function handleAddStudent () {
  const newStudent = {
  name: studentName,
  time: new Date().toLocaleString("pt-br", {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  })
};
setStudent(prevStates => [...prevStates, newStudent])
}

useEffect(() => {}, [])

  return (
    <div className='container'>
      <header>
    <h1>Lista de Presença</h1>
    <div>
    <strong>Yago</strong>
    <img src="https://github.com/YagoFerre.png" alt="Foto de Perfil" />
    </div>
    </header>
    <input type="text" 
     placeholder="Digite o nome..."
     onChange={e => setStudentName(e.target.value)} />
    <button type="button" onClick={handleAddStudent} >Adicionar</button>

   {student.map(student => <Card key={student.time} name={student.name} time={student.time} />)
     }
    </div>)
  }
export default Home
