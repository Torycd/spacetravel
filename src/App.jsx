import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RootLayOut from "./LayOut/RootLayOut";
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import Moon from "./components/Moon";
import Mars from "./components/Mars";
import Europa from "./components/Europa";
import Titan from "./components/Titan";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/Destination",
          element: <Destination />,
          children: [
            { path: "/Destination/", element: <Moon /> },
            { path: "/Destination/Mars", element: <Mars /> },
            { path: "/Destination/Europa", element: <Europa /> },
            { path: "/Destination/Titan", element: <Titan /> },
          ],
        },
        { path: "/Crew", element: <Crew /> },
        { path: "/Technology", element: <Technology /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
