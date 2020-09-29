import React, { useContext, useState } from "react";
import { TodosContext } from "./App";
import { Table, Form, Button } from "react-bootstrap";

function ToDoList() {
  const { state, dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(editTodo);
    if (editMode) {
      dispatch({ type: "edit", payload: { ...editTodo, text: todoText } });
      setEditMode(false);
      setEditTodo(null);
    } else {
      dispatch({ type: "add", payload: todoText });
    }
    setTodoText("");
  };

  return (
    <div >
      <div style={{ textAlign: "center" }}>
        <h1>活着就還不錯App</h1>
        <h3> 低目標的人生 aimlow</h3>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEditTodos">
          <Form.Control
            type="text"
            placeholder="別人問過得怎麼樣時,你的回答是...?
            "
            onChange={(event) => setTodoText(event.target.value)}
            value={todoText}
            style={{ width: "40vw" }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editMode ? "修改" : "添加"}{" "}
        </Button>
      </Form>

      <Table striped bordered hover style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th>回答</th>
            <th>修改</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map((todo) => (
            <tr key={todo.id} style={{ textAlign: "center" }}>
              <td>{todo.text}</td>
              <td
                onClick={() => {
                  setTodoText(todo.text);
                  setEditMode(true);
                  setEditTodo(todo);
                }}
              >
                <span role="img" aria-label="heart">
                  📃
                </span>
              </td>
              <td onClick={() => dispatch({ type: "delete", payload: todo })}>
                <span role="img" aria-label="heart">
                  🪓
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ToDoList;
