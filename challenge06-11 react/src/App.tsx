import { Challenge08breakingBad, Challenge09rerenders, Challenge10TodoApp } from "./components & hooks"
import { Challenge06customHooks } from "./components & hooks/challenge06/Challenge06customHooks"

function App() {
  return (
    <>
      <h2>Challenge 06: <small>custom hook</small></h2>
      <Challenge06customHooks/>
      <hr/>

      <h2>Challenge 07 & 08: <small>custom hooks & APIs</small></h2>
      <Challenge08breakingBad/>
      <hr/>

      <h2>Challenge 09: <small>fixing re-renders (memo/useMemo/useCallback)</small></h2>
      <Challenge09rerenders/>
      <hr/>
      
      <h2>Challenge 10 & 11: <small>useReducer/Redux</small></h2>
      <Challenge10TodoApp/>
    </>
  )
}

export default App
