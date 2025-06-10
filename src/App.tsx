import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
