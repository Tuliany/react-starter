import React from 'react'
import { Title } from './Title'
import { Content } from './Content'

export const Card = (props) => {
  return (
    <article className={props.cardStyle}>
      <Title title={props.title} emoji={props.emoji} titleColor={props.titleColor}/>
      <Content text={props.text} submitMessage={props.submitMessage} handleClick={props.handleClick} 
        contentCard={props.contentCard} contentText={props.contentText}
        buttonStyle={props.buttonStyle} />
    </article>
  )
}
