import React from 'react'
import { Button } from './Button'

export const Content = ({text, submitMessage, handleClick, contentCard, contentText, buttonStyle }) => {
  return (
    <div className={contentCard}>
    <p className={contentText}>
      {text}
    </p>
    <Button submitMessage={submitMessage} handleClick={handleClick} bbuttonStyle={buttonStyle} buttonText='button-text'/>
   </div>
    
  )
}