// eslint-disable-next-line
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/login/loginShop"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App