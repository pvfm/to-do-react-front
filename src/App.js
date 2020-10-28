import React, { useState } from 'react'
import './app.css'
import TaskForm from './taskform'
import List_Task from './list_task'

function App() {
  
  const [ form_state, set_form_state ] = useState(true)
  const [ list_tasks, set_list_tasks ] = useState([
    {
      description: "Varrer a casa",
      t_date: '24/10/1996'
    }
  ])
  const [ task, setTask ] = useState({
    description: 'Escovar os dentes',
    t_date: '25/10/1996'
  })


  return (
    <div id='main' className="App">
      <Button value={() => {
        if(form_state) return ''
      }}/>
      <button type="button" onClick={() => {set_form_state( !form_state )} }>Adicionar Tarefa</button>
      <button type="button" onClick={ () => {
        const obj = {
          description: task.description,
          t_date: task.t_date
        }
        set_list_tasks(list_tasks.concat(obj))
      }}>Adicionar as lista de tasks</button>
      {form_state && <TaskForm />}
      {!form_state && <List_Task value={list_tasks} />}
    </div>
  );
}

export default App;
