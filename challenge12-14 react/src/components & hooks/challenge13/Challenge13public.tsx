import { useContext, useState } from "react"
import { UserContext, types } from "."
import { useNavigate } from "react-router-dom"

export const Challenge13public = () => {

  const [iuser, setIUser] = useState('')
  const context = useContext(UserContext)
  const navigate = useNavigate()

  const onLogin = () => {
    let action
    const lastPath = localStorage.getItem('lastPath') || '/'

    if (iuser === '') {

      action = {
        type: types.LOGIN,
        payload: 'nombre genérico'
      }
    }
    else {
      action = {
        type: types.LOGIN,
        payload: iuser
      }
    }
    context?.dispatch(action)
    navigate(lastPath, {replace: true})
  }

  const onLogout = () => {

    const action = {
      type: types.LOGOUT,
      payload: ''
    }

    context?.dispatch(action)
  }

  return (
    <>
      <h2>Challenge 13: rutas públicas</h2>
      <label htmlFor="iusername"> Nombre de usuario: </label>
      <input id='iusername' type="text" placeholder="Ingresa tu nombre de usuario" value={iuser} onChange={(evt) => setIUser(evt.target.value)} />
      <button onClick={() => onLogin()}>Login</button>
      <button onClick={() => onLogout()}>Logout</button>
    </>
  )
}
