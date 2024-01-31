import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RootLayOut from "./LayOut/RootLayOut";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew"
import Technology from "./Pages/Technology";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/Destination", element: <Destination />, children: [
          {},{},{},{}
        ] },
        { path: "/Crew", element: <Crew/>},
        { path: "/Technology", element: <Technology/>},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
