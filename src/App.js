import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Siginin from "./pages/siginin";
import Siginup from "./pages/siginup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/html",
    element: <HTML />,
  },
  {
    path: "/signin",
    element: <Siginin />,  // LEVEL2: add new route to signin page
  },
  {
    path:"/siginup",
    element: <Siginin />,


  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
