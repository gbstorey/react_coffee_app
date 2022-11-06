import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import Error from "./pages/Error.jsx";
import Overview from "./pages/Overview.jsx";
import {loader as profilesLoader} from "./pages/Overview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Overview />,
        loader: profilesLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
