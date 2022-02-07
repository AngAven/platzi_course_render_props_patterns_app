import React, {useState} from 'react'
import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el cursso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: true},
  {text: 'LALALALAA', completed: false},
]

function App(){
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if(!searchValue.length >= 1){
    searchedTodos = todos
  } else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchedText = searchValue.toLowerCase()

      return todoText.includes(searchedText)
    })
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]

    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  return (
    <React.Fragment>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  )
}

export default App
