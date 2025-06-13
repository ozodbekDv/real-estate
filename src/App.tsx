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
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state: RootState) => state.user);
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
          element: (
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          ),
        },
        {
          path: "/contact",
          element: (
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          ),
        },
        {
          path: "/favourite",
          element: (
            <ProtectedRoute>
              <MyFavourite />
            </ProtectedRoute>
          ),
        },
        {
          path: "/agents",
          element: (
            <ProtectedRoute>
              <OurAgents />
            </ProtectedRoute>
          ),
        },
        {
          path: "/properties",
          element: (
            <ProtectedRoute>
              <Properties />
            </ProtectedRoute>
          ),
        },
        {
          path: "/terms",
          element: (
            <ProtectedRoute>
              <Terms />
            </ProtectedRoute>
          ),
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
