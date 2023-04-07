import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { NavComponent, Challenge13private, Challenge13public, Challenge14 } from "./components & hooks/"

function App() {
  return (
    <BrowserRouter>
      <NavComponent/>
      <Routes>
        <Route path="/" element={<Navigate to='/challenge13public' />} />
        <Route path="/challenge13public" element={<Challenge13public/>} />
        <Route path="/challenge13private" element={<Challenge13private/>} />
        <Route path="/challenge14" element={<Challenge14/>} />
        <Route path="/*" element={<Navigate to='/challenge13public' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
