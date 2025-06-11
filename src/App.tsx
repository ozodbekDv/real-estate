import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { RootState } from "./app/store";

import MainLayout from "./layouts/MainLayout";
import {
  Contact,
  Home,
  MyFavourite,
  OurAgents,
  Terms,
  About,
  Properties,
  NotFound,
  Login,
  SignUp,
} from "./pages/";
// import { useAppSelector } from "./hooks/useAppStore";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state: RootState) => state.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: user ? <MainLayout /> : <Login />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/favourite",
          element: <MyFavourite />,
        },
        {
          path: "/agents",
          element: <OurAgents />,
        },
        {
          path: "/properties",
          element: <Properties />,
        },
        {
          path: "/terms",
          element: <Terms />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
