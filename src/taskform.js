import React from 'react'
import './taskform.css'

const TaskForm = () => {
  return (
    <form>
      <div className="form_part">
        <label htmlFor="text_place">Descrição: </label>
        <input id="text_place" type="text" placeholder="Digite a tarefa"></input>
      </div>
      <br/>
      <div className="form_part">
        <label htmlFor="date_place">Data de conclusão: </label>
        <input id="date_place" type="date"></input>
      </div>
      <br/>
      <div className="form_part">
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

export default TaskForm
