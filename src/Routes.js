import { createBrowserRouter } from "react-router-dom";
import Layout from './Layout';
import Login from "./Components/Content/Login";
import Signup from "./Components/Content/Signup";
import Error from "./Components/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '*',
                element: <Error />,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },

]);

export default router;