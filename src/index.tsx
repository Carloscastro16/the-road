import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingView from './Views/landing/LandingView';
import AdminView from './Views/admin/AdminView';
import AdminDashboard from './Views/admin/AdminDashboard';
import StudentsView from './Views/students/StudentsView';
import StudentsDashboard from './Views/students/StudentsDashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingView />,
  },
  {
    path: "/administrador",
    element: <AdminView />,
    children: [
      {
        path: "/administrador/dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/estudiantes",
    element: <StudentsView />,
    children: [
      {
        path: "/estudiantes/dashboard",
        element: <StudentsDashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
