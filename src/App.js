import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Todo from "./components/Todo";
import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  doc,
  deleteDoc
} from "firebase/firestore";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const todoRef = collection(db, "todos");

  const getTodos = async () => {
    let data = await getDocs(todoRef);
    setTodos(data.docs.map((doc) => ({ ...doc.data() })));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
    getTodos();
  };

  const deleteTodo = (todo) => {
    // db.collection("todos").document(todo)
    // .delete()
    // console.log(todo)
    // deleteDoc(doc(db, "todos", todo.todo));
  } 

  return (
    <div className="App">
      <h2> TODO List App</h2>
      <form>
        <TextField
          id="outlined-basic"
          label="Make Todo"
          variant="outlined"
          style={{ margin: "0px 5px" }}
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((item) => (
          <Todo key={item.id} item={item} deleteTodo={deleteTodo} />
        ))} 
      </ul>
    </div>
  );
}

export default App;
