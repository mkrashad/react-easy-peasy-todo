import React from "react";
import model from "./model"
import { StoreProvider, createStore } from "easy-peasy"
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo.js";
import "./App.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
    <div className="container">
      <Todos />
      <AddTodo />
    </div>
    </StoreProvider>
  );
}

export default App;
