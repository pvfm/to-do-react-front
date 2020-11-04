import React from 'react'
import MemberList from './member_list'

const ListTask = ({ value }) => {
  return (
    <div>
      <ul>
        {value.map( (task, index)  => <MemberList key={index} description={task.t_description} t_date={task.t_date} />)}
      </ul>
    </div>
  )
}

export default ListTask

//duas listas uma com as concluidas e outra com a concluir 
