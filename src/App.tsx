import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";

function App() {
  // return <h1>React Starter Project</h1>;
  return (
    <>
      {/* <h1 className="my-5 text-4xl">TodoList</h1>
      <TodoForm />
      <TodoList />

      <hr className="my-5" />

      <h1 className="my-5 text-4xl">PostList</h1>
      <PostList /> */}

      {/* <h1 className="my-5 text-4xl">Counter</h1>
      <Counter /> */}

      <h1 className="my-5 text-4xl">TaskList</h1>
      <TaskList />
    </>
  );
}

export default App;
