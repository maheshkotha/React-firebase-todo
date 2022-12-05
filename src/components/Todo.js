import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./todo.css";

const Todo = ({ item, deleteTodo, key }) => {
  return (
    <List className="todo__list" key={key}>
      <ListItem>
        <ListItemAvatar />
        <ListItemText primary={item.todo} />
      </ListItem>
      <DeleteIcon
        fontSize="large"
        style={{ opacity: 0.7 }}
        onClick={() => {
          deleteTodo(item)
        }}
      />
    </List>
  );
};

export default Todo;
