import React, { useState } from 'react'
import './app.css'
import TaskForm from './taskform'
import ListTask from './list_task'
import Button from './button'

function App() {
  
  const [ form_state, set_form_state ] = useState(false)
  const [ list_tasks, set_list_tasks ] = useState([{
      t_description: "Oi",
      t_date: "22/10",
      done: true
  }])
  const [ t_description, setDescription ] = useState('')
  const [ t_date, set_d_date] = useState('')

  function button_form(flag) {
    if(flag) return 'Voltar'
    else return 'Adicionar tarefa'
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value)
  }

  function handleChangeDate(event) {
    set_d_date(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    alert('Formulario submetido')
    const obj = {
      t_description,
      t_date,
      done: false
    }
    console.log(obj)
    set_list_tasks(list_tasks.concat(obj))
    set_form_state(!form_state)
    setDescription('')
    set_d_date('')
  }

  function handleClick() {
    set_form_state(!form_state)
  }

  return (
    <div id='main' className="App">
      <Button value={button_form(form_state)} handleClick={handleClick} />
      {form_state && <TaskForm handleSubmit={handleSubmit} 
                               handleChangeDescription={handleChangeDescription} 
                               handleChangeDate={handleChangeDate}
                               description={t_description} 
                               date={t_date} />}
      {!form_state && <ListTask name='Tarefas a fazer' value={list_tasks.filter((task) => task.done === false)} />}
      {!form_state && <ListTask name='Tarefas feitas' value={list_tasks.filter((task) => task.done === true)} />}
    </div>
  );
}

export default App;
//{list_tasks.reduce((previous, current) => current.done === true)}
//list_tasks.reduce((previous, current) => current.done === false )