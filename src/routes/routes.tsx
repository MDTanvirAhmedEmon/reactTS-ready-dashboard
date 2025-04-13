import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import LogIn from '../pages/auth/Login';
import Income from '../pages/income/Income';
import ForgotPassword from '../pages/auth/ForgetPassword';
import VerificationCode from '../pages/auth/VerificationCode';
import SetNewPassword from '../pages/auth/SetNewPassword';


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
    {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
    },
    {
        path: "/auth/verification-code",
        element: <VerificationCode></VerificationCode>,
    },
    {
        path: "/auth/set-new-password",
        element: <SetNewPassword></SetNewPassword>,
    },

]);

export default router;