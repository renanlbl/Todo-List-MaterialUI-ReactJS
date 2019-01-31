import React from 'react'
import Menu from '../template/menu'
import TodoForm from '../template/todo-form'
import TodoList from '../template/todo-list'


const App = ({ handleAdd, description, handleChange, list, handleRemove, handleMarkAsDone ,handleMarkingAsPending }) => (
   <div>
      <Menu />
      <TodoForm handleAdd={handleAdd} description={description} handleChange={handleChange}  />
      <TodoList list={list} handleRemove={handleRemove} handleMarkAsDone={handleMarkAsDone} handleMarkingAsPending={handleMarkingAsPending} />
   </div>
)

export default App