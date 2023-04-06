import { FirstApp02 } from './components/challenge02/FirstApp02'
import { Challenge03buttons } from './components/challenge03/Challenge03buttons'
import { GiftExpertApp04 } from './components/challenge04/GiftExpertApp04'
import { GifGrid05 } from './components/challenge05/GifGrid05'

function App() {
  return (
    <>
      <FirstApp02/>
      <hr/>

      <h2>Challenge 03: <small>useState</small></h2>
      <Challenge03buttons/>
      <hr/>

      <h2>Challenge 04: <small>print arrays into HTML</small></h2>
      <GiftExpertApp04/>
      <hr/>

      <h2>Challenge 05: <small>fetch API</small></h2>
      <GifGrid05 category='Greyhound dog'/>
      <GifGrid05 category='Space'/>
      <GifGrid05 category='Cat'/>
    </>
  )
}

export default App
