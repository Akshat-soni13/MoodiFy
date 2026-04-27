import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Loader from "./shared/Loader"
export const router = createBrowserRouter([

    {
        path:"/",
        element:<Loader></Loader>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/Login",
        element:<Login></Login>
    }

])