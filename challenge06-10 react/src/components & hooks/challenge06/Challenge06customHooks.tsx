import { useCounter } from "./useCounter"

export const Challenge06customHooks = () => {
  const {getCounter, incrementCounter, decrementCounter, resetCounter} = useCounter(0)

  return (
    <div>
      <button type='button' onClick={() => decrementCounter()}> - </button>
      { getCounter }
      <button type='button' onClick={() => incrementCounter()}> + </button>
      <button type='button' onClick={() => resetCounter()}>Reset</button>
    </div>
  )
}
