import AddTodo from "./redux/components/AddTodo";
import TodoList from "./redux/components/TodoList";

function App() {
  return (
    <>
      <AddTodo />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
}

export default App;
