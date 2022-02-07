import React from 'react'
import {TodoCounter} from '../TodoCounter/TodoCounter'
import {TodoSearch} from '../TodoSearch/TodoSearch'
import {TodoList} from '../TodoList/TodoList'
import {TodoItem} from '../TodoItem/TodoItem'
import {CreateTodoButton} from '../TodoCreateTodoButton/CreateTodoButton'

const AppUI = (
  {
    error,
    loading,
    completedTodos,
    completeTodo,
    deleteTodo,
    searchedTodos,
    totalTodos,
    searchValue,
    setSearchValue
  }) => {

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
