import React from 'react'
import {TodoCounter} from '../TodoCounter/TodoCounter'
import {TodoSearch} from '../TodoSearch/TodoSearch'
import {TodoList} from '../TodoList/TodoList'
import {TodoItem} from '../TodoItem/TodoItem'
import {CreateTodoButton} from '../TodoCreateTodoButton/CreateTodoButton'

const AppUI = ({
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
