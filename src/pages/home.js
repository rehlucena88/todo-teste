import React, { useEffect, useState } from 'react'

import { Form } from '../components/form'
import { TasksList } from '../components/takslist'




export function Home() {
  const [state,setState] = useState([])
  const onSuccess = (title) =>{
    fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify({
    userId: 1,
    title,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
     setState((prev)=>[...prev, json])// toda vez q adicionarmos uma tarefa  a funçao chama o prev e adiciona um novo item.
} )
}
const onRemove = (id) =>{
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
  method: 'DELETE',
}).then(()=>{
  setState((prev)=> prev.filter((item)=> item.id !== id))
})
}

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
  .then(response => response.json())
  .then(json => setState(json))
  },[])//o array vazioevita que o useeffect rode toda vez o o state for atualaizado somente rodando no mount o componente.
  return (
    <div id="app">
      <Form onSuccess={onSuccess} />
      <TasksList tasks={state} onRemove={onRemove}  />
    </div>
  )
}
