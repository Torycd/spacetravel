import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RootLayOut from "./LayOut/RootLayOut";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
