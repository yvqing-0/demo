import { createBrowserRouter, RouteObject } from "react-router-dom";
import Admin from '../pages/Admin';
import Login from "../pages/User/Login";
import Enroll from "../pages/User/Enroll"
import NotFoundPage from "../components/404";
import User from "../pages/User";
import Loading from "../pages/Loading";

const routes: RouteObject[] = [
  {
    path: "/User",
    element: <User />,
    children: 
    [
      {
        path: "Enroll",
        element: <Enroll />,
      },
      {
        path: "Login",
        element: <Login />,
      }
    ]
  },
  {
    path: "/",
    element: <Loading />,

  },

  {
    path: "/Admin",
    element: <Admin />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;