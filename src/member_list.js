import React from 'react'

const MemberList = ({ description, t_date }) => {
  return (
    <div>
      <li>{description} - {t_date} 
        <input type='checkbox'/> Feito
      </li> 
    </div>
  )
}

export default MemberList
