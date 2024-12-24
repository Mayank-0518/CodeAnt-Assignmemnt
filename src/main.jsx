import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store.js';
import LoginPage from './pages/LoginPage.jsx';
import RepositoriesPage from './pages/RepositoriesPage.jsx';
import { useEffect } from 'react';

// Protected Route Checker func..
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Redirecting the user Based on Auth
const RedirectToRepo = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/repositories" replace />;
  }

  return <LoginPage />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectToRepo />, 
  },
  {
    path: "/repositories",
    element: (
      <ProtectedRoute>
        <RepositoriesPage />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
