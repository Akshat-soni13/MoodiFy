import React from 'react'
import { RouterProvider } from "react-router-dom"
import {router} from "./app.routes"
import FaceExpression from './features/expression/components/FaceExpression'
import "./shared/sstyles/globsl.scss"
import { AuthProvider } from './features/auth/auth.context'
const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} >
        </RouterProvider>
      </AuthProvider>
      {/* <FaceExpression></FaceExpression> */}
    </div>
  )
}

export default App