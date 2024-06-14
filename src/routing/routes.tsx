import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserList from "./UserList";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { path: "", element: <HomePage /> },
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
      { path: "contact", element: <ContactPage /> },
      // { path: "users", element: <UserList /> },
      // { path: "users/:id", element: <UserDetailPage /> },
      // { path: "posts/:year/:month", element: <postsListPage /> },
    ],
  },
]);

export default router;
