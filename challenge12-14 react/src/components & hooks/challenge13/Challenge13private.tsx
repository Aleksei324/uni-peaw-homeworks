import { useContext } from "react"
import { UserContext } from "."

export const Challenge13private = () => {

  const context = useContext(UserContext)
  return (
    <>
      <h2>Challenge 13: rutas privadas</h2>
      <h1>Bienvenido, {context?.state.name}</h1>
    </>
  )
}
