import React, { useState } from "react"
import { v4 as uuid } from "uuid"

import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from "./style.js"
import { BiPointer } from "react-icons/bi";

function App() {
  const [list, setList] = useState([
    { id: uuid(), task: "Nada", finished: true },
  ]);
  const [InputTask, setInputTask] = useState('');

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarItem(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  function botaoClicado() {
    if(InputTask){ 
    setList([...list, { id: uuid(), task: InputTask, finished: false }])
  }
}
  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenha para fazer..." />
        <Button onClick={botaoClicado}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map((item) => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletarItem(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3>Não há itens na lista</h3>
            )
          }
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
