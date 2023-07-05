import { FormEvent, useState } from "react";

import { useDispatch } from "react-redux";
import { add } from "../store";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();

  function handleNewTodoChange(e: FormEvent) {
    e.preventDefault();

    dispatch(
      add({
        newTodo,
      })
    );

    setNewTodo("");
  }

  return (
    <form onSubmit={handleNewTodoChange}>
      <input
        type="text"
        placeholder="Novo todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
