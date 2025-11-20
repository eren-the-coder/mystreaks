import React from 'react';
import { Home } from './ui/pages/Home/Home.tsx';
import { RoutineProvider } from './context/RoutineContext.tsx'
import { Details } from './ui/pages/Details/Details.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from './ui/pages/RootLayout/RootLayout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "details/:routineId", element: <Details /> },
    ],
  },
  {
    path: "*",
    element: <>
      {/* <Header />
      <div className="page">
        <NotFound />
      </div>
      <Footer /> */}
    </>,
  },
]);

const App: React.FC = () => {

  return (
    <RoutineProvider>
      <RouterProvider router={router} />
    </RoutineProvider>
  );
};

export default App;
