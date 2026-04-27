import React from 'react'
import { RouterProvider } from "react-router-dom"
import {router} from "./app.routes"
import FaceExpression from './features/expression/components/FaceExpression'
import "./shared/sstyles/globsl.scss"

const App = () => {
  return (
    <div>
      <RouterProvider router={router} >
        
      </RouterProvider>
      {/* <FaceExpression></FaceExpression> */}
    </div>
  )
}

export default App