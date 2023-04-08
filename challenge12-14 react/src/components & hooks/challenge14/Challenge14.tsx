import { useDispatch, useSelector } from "react-redux"
import { aumentar, reducir } from "./valueSlice"
import { useState } from "react"

export const Challenge14 = () => {

  const value = useSelector((state: any) => state.valueSlice.value) // obtiene el *estado* almacenado en el store
  const dispatch = useDispatch() // un *dispatch* para controlarlos a todos...
  const [inumber, setINumber] = useState('1')

  const onIncrement = () => {
    if (!( isNaN(Number(inumber)) )) {
      dispatch( aumentar(Number(inumber)) )
    }
  }

  return (
    <>
      <h2>Challenge 14: <small>redux</small></h2>

      <button onClick={() => dispatch( reducir() )}>Reducir en 5 unidades</button>
      <h1>Valor: {value}</h1>
      <button onClick={() => onIncrement()}>Incrementar en</button>
      <input type="number" id="value" value={inumber} onChange={(evt) => setINumber(evt.target.value)} placeholder="aqui" />
      <label htmlFor="value"> unidades </label>
    </>
  )
}
