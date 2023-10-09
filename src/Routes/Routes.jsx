import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import EventDetails from "../Pages/EventDetails/EventDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Layouts/Error";
import PrivateRoutes from "./PrivateRoutes";
import RecentEvents from "../Pages/Home/RecentEvents/RecentEvents";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>, 
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/events.json"),
            },
            {
                path: "/event/:id",
                element: <PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>,
                loader: () => fetch("/events.json")
            },
            {
                path: "/recent_events",
                element: <PrivateRoutes><RecentEvents></RecentEvents></PrivateRoutes>
            },
            {
                path: "/contact",
                element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router;