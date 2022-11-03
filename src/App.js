// eslint-disable-next-line
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {publicRoutes} from "./routes"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
              const Page = route.component
              return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App