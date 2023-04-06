import { useState } from "react"

export const useCounter = (value: number) => {
  const [getCounter, setCounter] = useState(value)

  return {
    getCounter: getCounter,
    incrementCounter: () => {setCounter((x) => x + 1)},
    decrementCounter: () => {setCounter((x) => x - 1)},
    resetCounter: () => {setCounter(value)}
  }
}
