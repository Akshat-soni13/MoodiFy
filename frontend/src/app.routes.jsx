import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Loader from "./shared/Loader"
import FaceExpression from "./features/expression/components/FaceExpression"
import Protected from "./features/auth/components/Protected"
import Home from "./features/home/pages/Home"
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Protected>
            <Home></Home>
        </Protected>
    //   {/* <FaceExpression></FaceExpression> */}
        // element: <FaceExpression></FaceExpression>
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