import React, { useState } from "react";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";

export default function App() {
  const [list, setList] = useState([{
    id: '1',
    text: 'first'
  },
  {
    id: '2',
    text: 'second'
  }])
  return (
    <div className="App">
      <Form/>
      <ItemsList list={list}/>
    </div>
  );
}
