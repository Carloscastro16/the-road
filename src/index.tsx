import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import LandingView from './Views/landing/LandingView';
import AdminView from './Views/admin/AdminView';
import AdminDashboard from './Views/admin/AdminDashboard';
import StudentsView from './Views/students/StudentsView';
import StudentsDashboard from './Views/students/StudentsDashboard';
import { AuthProvider } from './Services/Auth/AuthProvider';
import PrivateRoute from './Services/Routes/ProtectedRoute';
import LoginPage from './Views/auth/AuthView';
import AdminRoutes from './Views/admin/AdminRoutes';
import AdminActivities from './Views/admin/AdminActivities';
import AdminUsers from './Views/admin/AdminUsers';
import AdminGenres from './Views/admin/AdminGenres';
import StudentsRoads from './Views/students/StudentsRoads';
import StudentsActivities from './Views/students/StudentsActivities';
import IndividualRoads from './Views/students/IndividualRoads';
import CreateActivitie from './Views/admin/AdmintCreateActivities';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingView />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/administrador',
    element: <PrivateRoute />,
    children: [
      {
        path: '/administrador',
        element: <AdminView />,
        children: [
          {
            path: 'dashboard',
            element: <AdminDashboard />,
          },
          {
            path: 'rutas',
            element: <AdminRoutes />,
          },
          {
            path: 'actividades',
            element: <AdminActivities />,
          },
          {
            path: 'crear_actividad',
            element: <CreateActivitie />,
          },
          {
            path: 'generos',
            element: <AdminGenres />,
          },
          {
            path: 'usuarios',
            element: <AdminUsers />,
          },
          {
            path: 'perfil',
            element: <AdminUsers />,
          },
        ],
      },
    ],
  },
  {
    path: '/estudiantes',
    element: <PrivateRoute />,
    children: [
      {
        path: '/estudiantes',
        element: <StudentsView />,
        children: [
          {
            path: 'dashboard',
            element: <StudentsDashboard />,
          },
          {
            path: 'actividades',
            element: <StudentsActivities />,
          },
          {
            path: 'rutas',
            element: <StudentsRoads />,
          },
          {
            path: 'rutas/:routeId',
            element: <IndividualRoads />,
          },
          {
            path: 'perfil',
            element: <StudentsDashboard />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
