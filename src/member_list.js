import React from 'react'

const MemberList = ({ description, t_date }) => {
  return (
    <li>{description} - {t_date}</li>
  )
}

export default MemberList
