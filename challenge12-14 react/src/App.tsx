import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { NavComponent, Challenge13public, Challenge14, UserProvider, PrivateRoutes, reduxStore } from "./components & hooks/"
import { Provider } from "react-redux"

function App() {
  return (
    <BrowserRouter>
    
      <NavComponent/>

      {/** Redux */}
      <Provider store={reduxStore}>
        {/** createContext + useReducer */}
        <UserProvider>

          <Routes>
            <Route path="/" element={<Navigate to='/challenge13public' />} />
            <Route path="/challenge13public" element={<Challenge13public/>} />
            <Route path="/challenge14" element={<Challenge14/>} />
            <Route path="/*" element={<PrivateRoutes/>} />
          </Routes>

        </UserProvider>
      </Provider>
      
    </BrowserRouter>
  )
}

export default App
