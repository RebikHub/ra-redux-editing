import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemStore, deleteItemStore, editItemStore } from "./store/listReducer"

import Form from "./components/Form";
import ItemsList from "./components/ItemsList";

export default function App() {
  const [input, setInput] = useState({
    name: '',
    price: ''
  })
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(null)
  const storeItems = useSelector((state) => state.listReducer.items)
  const dispatch = useDispatch()

  function inputName(ev) {
    setInput((prev) => ({...prev, name: ev.target.value}))
  }

  function inputPrice(ev) {
    setInput((prev) => ({...prev, price: ev.target.value}))
  }

  function addItem(ev) {
    ev.preventDefault()
    if (input.name !== '' && input.price !== '' && !edit) {
      dispatch(addItemStore({
        name: input.name,
        price: input.price,
        id: nanoid()
      }))
      setInput({
        name: '',
        price: ''
      })
    } else if (input.name !== '' && input.price !== '' && edit) {
      console.log(editId);
      dispatch(editItemStore({
        name: input.name,
        price: input.price,
        id: editId
      }))
      setInput({
        name: '',
        price: ''
      })
      setEdit(false)
    }
  }

  function editItem(item) {
    setInput({
      name: item.name,
      price: item.price
    })
    setEdit(true)
    setEditId(item.id)
  }

  function removeItem(item) {
    dispatch(deleteItemStore(item.id))
    setInput({
      name: '',
      price: ''
    })
    setEdit(false)
    setEditId(null)
  }

  function cancelEdit() {
    setInput({
      name: '',
      price: ''
    })
    setEdit(false)
    setEditId(null)
  }

  return (
    <div className="App">
      <Form
        name={input.name}
        price={input.price}
        inputName={inputName}
        inputPrice={inputPrice}
        addItem={addItem}
        edit={edit}
        cancelEdit={cancelEdit}/>
      <ItemsList list={storeItems} editItem={editItem} removeItem={removeItem}/>
    </div>
  );
}
