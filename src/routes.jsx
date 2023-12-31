import Trial from "./pages/Trial";
import Home from "./pages/Home";
import Login from "./pages/Login";

const privateRoutes = [
  {
    path: "/",
    element: <Trial />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <div>settings</div>,
  },
  {
    path: "/link/:id",
    element: <div>link</div>,
  },
];

const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <div>register</div>,
  },
];

export { privateRoutes, publicRoutes };
