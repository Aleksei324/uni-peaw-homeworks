import { useCallback, useState } from "react"
import { Son } from "./"

export const Challenge09rerenders = () => {
  const list = [2, 4, 6, 8, 10]
  const [valor, setValor] = useState(0)

  const increment = useCallback( (num: number) => {
    setValor((x) => x + num )
  }, [])

  return (
    <div>
      <h3>Father</h3>
      <p>Total: { valor }</p>
      
      {
        list.map( (n, idx) => {
          return (
            <Son
              key={idx}
              numero={n}
              increment={increment}
            />
          )
        })
      }
    </div>
  )
}
