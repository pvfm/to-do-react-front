import React, { useState } from 'react'
import './app.css'
import TaskForm from './taskform'
import List_Task from './list_task'
import Button from './button'

function App() {
  
  const [ form_state, set_form_state ] = useState(false)
  const [ list_tasks, set_list_tasks ] = useState([])
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
    alert('Formulario submetido')
    const obj = {
      t_description,
      t_date
    }
    console.log(obj)
    set_list_tasks(list_tasks.concat(obj))
    set_form_state(!form_state)
    event.preventDefault()
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
      {!form_state && <List_Task value={list_tasks} />}
    </div>
  );
}

export default App;
