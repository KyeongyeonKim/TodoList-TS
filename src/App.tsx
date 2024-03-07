import AddTodo from "./redux/components/AddTodo";
import TodoList from "./redux/components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="content-style">
      <h3>My Todo List</h3>
      <AddTodo />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
}

export default App;
