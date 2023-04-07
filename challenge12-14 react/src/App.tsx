import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { NavComponent, Challenge13private, Challenge13public, Challenge14, UserProvider } from "./components & hooks/"
import { PrivateRoutes } from "./components & hooks/challenge13/PrivateRoutes"

function App() {
  return (
    <BrowserRouter>
      <NavComponent/>

      <UserProvider>

        <Routes>
          <Route path="/" element={<Navigate to='/challenge13public' />} />
          <Route path="/challenge13public" element={<Challenge13public/>} />
          <Route path="/challenge14" element={<Challenge14/>} />
          <Route path="/*" element={<PrivateRoutes/>} />
        </Routes>

      </UserProvider>
    </BrowserRouter>
  )
}

export default App
