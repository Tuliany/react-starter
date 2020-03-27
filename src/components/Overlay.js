import React from 'react'
import { Title } from './Title'


export const Overlay = (props) => {
  
  return (
    <article>
      <Title title={props.title} emoji={props.emoji} />
    </article>
  )
}