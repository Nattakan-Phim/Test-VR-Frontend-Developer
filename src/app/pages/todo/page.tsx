"use client";
import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Edit, Delete, Save } from "@mui/icons-material";

interface Todo {
  text: string;
  completed: boolean;
}

export default function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTodo, setEditTodo] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    }
  }, []);

  const saveTodos = (todos: Todo[]) => {
    setTodos(todos);
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      saveTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const removeTodo = (index: number) => {
    saveTodos(todos.filter((_, i) => i !== index));
  };

  const startEditTodo = (index: number) => {
    setEditIndex(index);
    setEditTodo(todos[index].text);
  };

  const saveEditTodo = () => {
    if (editIndex !== null && editTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex].text = editTodo;
      saveTodos(updatedTodos);
      setEditIndex(null);
      setEditTodo("");
    }
  };

  const toggleComplete = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    saveTodos(updatedTodos);
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundColor: "#cfd8dc",
        padding: "20px",
        borderRadius: "10px",
        color: "#37474f",
      }}
    >
      <h1 className="text-4xl">Todo List</h1>
      <div style={{ marginTop: "16px" }}>
        <TextField
          fullWidth
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <Button
          onClick={addTodo}
          variant="contained"
          color="primary"
          style={{ marginLeft: "8px", marginTop: "8px" }}
        >
          Add
        </Button>
      </div>
      <List style={{ marginTop: "16px" }}>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
            />
            {editIndex === index ? (
              <>
                <TextField
                  fullWidth
                  variant="outlined"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
                <IconButton onClick={saveEditTodo} color="primary">
                  <Save />
                </IconButton>
              </>
            ) : (
              <>
                <ListItemText
                  primary={todo.text}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                />
                <IconButton
                  onClick={() => startEditTodo(index)}
                  color="warning"
                >
                  <Edit />
                </IconButton>
                <IconButton onClick={() => removeTodo(index)} color="error">
                  <Delete />
                </IconButton>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
