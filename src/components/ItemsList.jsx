import React from 'react'
import Item from './Item'

export default function ItemsList(props) {
  return (
    <ul className="list">
      {props.list.map((el) => <Item text={el.text} key={el.id}/>)}
    </ul>
  )
}
