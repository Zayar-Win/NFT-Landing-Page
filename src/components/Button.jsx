import React from 'react'

const Button = ({text,blue=false}) => {
  return (
      <div className='button-container'>
        <button className={`${blue ? "blue" : ""} button`}>{text}</button>
      </div>
  )
}

export default Button