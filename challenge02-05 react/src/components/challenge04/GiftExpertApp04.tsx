import { useState } from "react"
import { GifGrid04 } from "./GifGrid04"

export const GiftExpertApp04 = () => {
  const [getInputValue, setInputValue] = useState('')
  const [getCategoryList, setCategoryList] = useState(['Primera categoría'])

  /**
   * Use useState hook to addCategories
   * to the list with onClick event button.
   * Inside above item, call setCategory
   * to clear input field after add one
   * category.
   */
  const addCategory = () => {
    if (getInputValue !== '') {
      setCategoryList((list) => [...list, getInputValue])
      setInputValue('')
    }
  }

  return (
    <div>
      <form id="formc">
        <label htmlFor='cinput'>Categoría: </label>
        <input 
          type='text'
          id='cinput'
          name='categoryinput'
          value={getInputValue}
          onChange={(event) => setInputValue(event.target.value)}/>
      </form>

      <button type="button" onClick={() => addCategory()}>Añadir categoría</button>

      {getCategoryList.map((category, key) => {
        return <GifGrid04 key={key} category={category}/>
      })}
    </div> 
  )
}
