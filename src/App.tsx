import { useEffect } from "react";
// router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// redux toolkit
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { isAuthReady, login } from "./app/features/userSlice";

// local files - compoentns, pages, layouts
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
  PrivacyPolicy,
} from "./pages/";
import ProtectedRoute from "./components/ProtectedRoutes";
import Product from "./pages/Product";

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
          path: "/properties/:id",
          element: (
            <ProtectedRoute>
              <Product />
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
        {
          path: "/privacy",
          element: (
            <ProtectedRoute>
              <PrivacyPolicy />
            </ProtectedRoute>
          ),
        },
        {
          path: "/*",
          element: (
            <ProtectedRoute>
              <NotFound />
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
