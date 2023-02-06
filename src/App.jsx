import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles.js'

function App() {

  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {

    if(inputTask) {
    setList([...list, { id: uuidv4(), task: inputTask, finished: false }]) }
  }



  function finalizarTarefa(id)  {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteItem(id) {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }






  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que eu tenho para fazer.." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
       { list.length > 0 ? ( 
            list.map(item => (                   // o 'key' deve estar no pai//

              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteItem(item.id)} />
              </ListItem>

            )) ) : (<h3>Não há itens na lista</h3>)
          
          

          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
