import React from 'react'
import ButtonsEdit from './ButtonsEdit'

export default function Item({text}) {
  return (
    <li>
      <p className="item-text">{text}</p>
      <ButtonsEdit/>
    </li>
  )
}
