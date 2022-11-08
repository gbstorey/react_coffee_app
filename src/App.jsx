import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import {loader as profilesLoader} from "./util/loaders.js";
import { action as createProfile } from "./util/actions.js";
import React, { Suspense } from "react";

const NewProfile = React.lazy(() => import("./components/UI/NewProfile.jsx"));
const Overview = React.lazy(() => import("./pages/Overview.jsx"));
const Error = React.lazy(() => import("./pages/Error.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Suspense fallback={<p>Loading...</p>}><Error /></Suspense>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Overview />
          </Suspense>
        ),
        loader: profilesLoader,
      },
    ],
  },
  {
    path: "/new-entry",
    element: <RootLayout />,
    errorElement: <Suspense fallback={<p>Loading...</p>}><Error /></Suspense>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <NewProfile />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/profileCreation",
    action: createProfile,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
