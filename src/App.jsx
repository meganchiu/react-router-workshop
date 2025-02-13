import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Routes>
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
        <div id="main-section">{/* routes here */}</div>
      </div>
    </>
  )
}

export default App
