import React, { useState }from 'react'

export const Button = ({submitMessage, handleClick, buttonStyle, buttonText}) => {
  return (
    <button type='submit' onClick={handleClick} className={buttonStyle}><p className={buttonText}>{submitMessage} </p> </button>
  )
}