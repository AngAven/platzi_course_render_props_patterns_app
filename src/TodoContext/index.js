import React, {createContext, useState} from 'react'
import {useLocalStorage} from './useLocalStorage'

const TodoContext = createContext()

function TodoProvider(props){
  const {
    error, loading, item: todos, saveItem: saveTodos
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  let searchedTodos

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchedText = searchValue.toLowerCase()

      return todoText.includes(searchedText)
    })
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]

    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
    }}>
      {props.children}
    </TodoContext.Provider>)
}

export {TodoContext, TodoProvider}
