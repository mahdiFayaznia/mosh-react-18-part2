import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserList from "./UserList";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />, // just handle error in root route
    children: [
      // { path: "", element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      // {
      //   path: "users",
      //   element: <UsersPage />,
      //   children: [{ path: ":id", element: <UserDetail /> }],
      // },
      { path: "contact", element: <ContactPage /> },
      // { path: "users", element: <UserList /> },
      // { path: "users/:id", element: <UserDetailPage /> },
      // { path: "posts/:year/:month", element: <postsListPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
