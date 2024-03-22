import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  // return <h1>React Starter Project</h1>;
  const [tasks, dispatch] = useReducer(tasksReducer, []);

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
      {/* <h1 className="my-5 text-4xl">TaskList</h1>
      <TaskList /> */}
      {/* <h1 className="my-5 text-4xl">LoginStatus</h1>
      <LoginStatus /> */}

      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </>
  );
}

export default App;
