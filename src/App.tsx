import React from "react"
import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar"
import { BrowserRouter as Router } from "react-router-dom"
import Expenses from "./pages/expenses/Expenses"

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </>
  )
}

export default App
