import { useCounter } from "../challenge06/useCounter"
import { useFetch } from "../challenge07"

export const Challenge08breakingBad = () => {
  const {getCounter, incrementCounter} = useCounter(1)
  const {data, isLoading} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${getCounter}`)
  return (
    <div>
      {
        isLoading?(
          <h2>Cargando...</h2>
        ):(
          <div>
            <b> Frase de Breaking Bad #{getCounter}: </b> { data }
          </div>
        )
      }
      <button type="button" onClick={() => incrementCounter()}>Siguiente frase</button>
    </div>
  )
}
