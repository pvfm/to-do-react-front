import React from 'react'
import Member_List from './member_list'

const List_Task = ({ value }) => {
  return (
    <div>
      <ul>
        {value.map( (task, index)  => <Member_List key={index} description={task.t_description} t_date={task.t_date} />)}
      </ul>
    </div>
  )
}

export default List_Task
