import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Challenge13private, UserContext } from "./"
import { useContext } from "react"

export const PrivateRoutes = () => {

  const context = useContext(UserContext)
  const {pathname, search} = useLocation()
  localStorage.setItem('lastPath', `${pathname}${search}`)
  return (
    <Routes>
      <Route path="/challenge13private" element={context?.state.logged ? <Challenge13private/>:<h1>Not logged</h1>} />
      <Route path="/*" element={<Navigate to='/challenge13public' />} />
    </Routes>
  )
}
