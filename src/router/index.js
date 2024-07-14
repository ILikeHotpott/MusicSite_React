import Layout from "../pages/Layout";
import {createBrowserRouter} from "react-router-dom";
import Review from "@/pages/Review"
import {AuthRoute} from "@/components/AuthRoute";
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Search from "@/pages/Search";
import Playground from "@/pages/Playground";


const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/search',
        element: <Search/>
    },
    {
        path: '/',
        element: <Layout/>,
    },
    {
        path: '/reviews',
        element: <Review/>
    },
    {
        path: '/playground',
        element: <Playground/>
    },
    {
        path: '/dashboard',
        element: <AuthRoute><Home/></AuthRoute>,
        children: [
            {
                path: 'reviews',
                element: <Review/>
            },
            {
                path: 'article',
                element: <div>Article</div>
            }
        ]
    },

])

export default router;