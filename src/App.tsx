import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isAuthReady, login } from "./app/features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state: RootState) => state.user);
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
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <SignUp />,
    },
  ]);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login(user));
    }
    dispatch(isAuthReady());
  }, []);

  return <>{isAuth && <RouterProvider router={routes} />}</>;
}

export default App;
