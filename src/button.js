import React from 'react'

const Button = ({ value, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>{value}</button>
  )
}

export default Button