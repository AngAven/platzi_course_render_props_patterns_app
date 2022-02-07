import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg)
  }

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton('Aquí modal')}
    >+</button>
  );
}

export { CreateTodoButton };
