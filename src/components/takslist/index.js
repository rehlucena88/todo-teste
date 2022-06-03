import React from 'react'

export function TaskItem({id, title, onRemove}){
  const onClick =() => onRemove(id)
  return(
    <li>
      <span>{title}</span>
      <button onClick={onClick}>Remover</button>
    </li>
  )
}
export function TasksList({tasks, onRemove}) {
  return (
    <section>
      <h2>Tarefas</h2>
      <ul id='tasks'>
       {tasks.map((item, index)=>(
        <TaskItem key={item.id} {...item} onRemove={onRemove}/>
      ) )}
      </ul>
    </section>
  )
}
//a funçao desse componente somente é inserir um novo item dentro do array,usando a funçao map e colocando na posiçao do index