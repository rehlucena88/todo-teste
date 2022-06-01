import React, { useState } from 'react'


export function TasksList({tasks}) {
  return (
    <section>
      <h2>Tarefas</h2>
      <ul>
       {tasks.map((item, index)=>(
        <li key={item.id}>{item.text}</li>
      ) )}
      </ul>
    </section>
  )
}
//a funçao desse componente somente é inserir um novo item dentro do array,usando a funçao map e colocando na posiçao do index