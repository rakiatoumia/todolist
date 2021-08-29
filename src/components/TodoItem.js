import React, { useRef } from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
      key={item.id}
      className="Item"
    >
      <input className="description"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
          <i className="fas fa-pen" onClick={() => changeFocus()}></i>
        {item.completed === false && (
          <i className="fas fa-check" onClick={() => completeTodo(item.id)}></i>
        )}
        <i className="far fa-trash-alt" onClick={() => removeTodo(item.id)}></i>
      </div>
   </li>
  );
};

export default TodoItem;
