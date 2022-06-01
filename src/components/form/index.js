import React, { useState } from 'react'

export function Form({onSuccess}) {
  const [state, setState]= useState('') //controla o estado do input

  const onChange = (ev) => setState(ev.target.value)
  const onSubmit = (ev) =>{
    ev.preventDefault()
    if(state){
      onSuccess({id:Math.random(), text: state})
      setState('')
    }
   
  }
  return (
    <section>
      <h1>Adicionar Tarefas</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="text"  placeholder='Digite sua tarefa' value = {state}
        onChange={onChange}/>
        
        <button type='submit'>Adicionar</button>
      </form>
    </section>
  )
}