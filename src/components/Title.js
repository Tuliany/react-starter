import React from 'react'

export const Title = ({title, emoji,titleColor}) => {
  return (
    <header>
      <h1 className={titleColor}>{title} 
      </h1>
    <div>
    <span role='img'>{emoji}</span>
    </div>
    
    </header>
  )

}
