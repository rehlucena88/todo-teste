import React, { useState } from 'react'

import { Form } from '../components/form'
import { TasksList } from '../components/takslist'




export function Home() {
  const [state,setState] = useState([])
  const onSuccess = (item) => setState((prev)=>[...prev, item])// toda vez q adicionarmos uma tarefa  a funçao chama o prev e adiciona um novo item.
  return (
    <div id="app">
      <Form onSuccess={onSuccess} />
      <TasksList tasks={state} />
    </div>
  )
}
