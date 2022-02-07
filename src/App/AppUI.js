import React, {useContext} from 'react'
import {TodoContext} from '../TodoContext'
import {TodoCounter} from '../TodoCounter/TodoCounter'
import {TodoSearch} from '../TodoSearch/TodoSearch'
import {TodoList} from '../TodoList/TodoList'
import {TodoItem} from '../TodoItem/TodoItem'
import {CreateTodoButton} from '../TodoCreateTodoButton/CreateTodoButton'

const AppUI = () => {
  const {error, loading, searchedTodos, completeTodo, deleteTodo} = useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {error && <p>Hay errores</p>}
        {loading && <p>Cargando data</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  )
}

export {AppUI}
