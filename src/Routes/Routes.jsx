import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>, 
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("events.json")
            }
        ]
    }
])

export default router;