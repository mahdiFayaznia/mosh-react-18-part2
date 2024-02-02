import "./App.css";
import PostList from "./react-query/PostList";
import TodoList from "./react-query/TodoList";

function App() {
  // return <h1>React Starter Project</h1>;
  return (
    <>
      <h1 className="my-5 text-4xl">PostList</h1>
      <PostList />

      <hr className="my-5" />

      <h1 className="my-5 text-4xl">TodoList</h1>
      <TodoList />
    </>
  );
}

export default App;
