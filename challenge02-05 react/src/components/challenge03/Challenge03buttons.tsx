import { useState } from "react"

export const Challenge03buttons = () => {
  const [getCounter, setCounter] = useState(100)

  /**
   * Implement handleSubsstract
   * by substracting from counter.
   */
  const handleSubstract = () => {
    setCounter((x)=>x-1)
  }

  /**
   * Implement handleReset by
   * setting counter as default
   * value.
   */
  const handleReset = () => {
    setCounter(100)
  }

  return (
    <div>
      <button type="button" onClick={()=>handleSubstract()}>Substract</button>
      {getCounter}
      <button type="button" onClick={()=>handleReset()}>Reset</button>
    </div>
  )
}
