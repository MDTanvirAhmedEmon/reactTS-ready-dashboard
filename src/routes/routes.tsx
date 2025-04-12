import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import LogIn from '../pages/auth/Login';
import Income from '../pages/income/Income';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/income",
                element: <Income></Income>,
            },
        ]
    },
    {
        path: "/auth/login",
        element: <LogIn></LogIn>,
    },

]);

export default router;