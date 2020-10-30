import React from 'react'
import './taskform.css'

const TaskForm = ({ handleSubmit, handleChangeDescription, handleChangeDate, description, date }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form_part">
        <label htmlFor="text_place">Descrição: </label>
        <input id="text_place" type="text" 
          onChange={handleChangeDescription}
          value={description} 
          placeholder="Digite a tarefa"></input>
      </div>
      <br/>
      <div className="form_part">
        <label htmlFor="date_place">Data de conclusão: </label>
        <input id="date_place" type="date" value={date} onChange={handleChangeDate}></input>
      </div>
      <br/>
      <div className="form_part">
        <button type="submit" value='Enviar'>Enviar</button>
      </div>
    </form>
  )
}

export default TaskForm
