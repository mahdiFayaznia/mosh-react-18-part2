import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/counter/Counter";
import { TaskList } from "./state-management/tasks";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/tasks/tasksContext";
import AuthContext from "./state-management/auth/authContext";
import { AuthProvider } from "./state-management/auth";
import { TasksProvider } from "./state-management/tasks";

function App() {
  // return <h1>React Starter Project</h1>;
  // const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  // const [user, authDispatch] = useReducer(authReducer, "");

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

      {/* <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthContext.Provider> */}

      <AuthProvider>
        <TasksProvider>
          <Counter />
          <div className="divider"></div>
          <NavBar />
          <HomePage />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
