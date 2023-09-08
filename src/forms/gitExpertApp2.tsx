import { useState } from "react"

export const GifExpertApp =() => {
  const [categories, setCategories] = useState(["One punch"]);
  const [inputValue, SetInputValue] = useState("");

  const addCategory = () => {
      if (inputValue.trim() !== "" && inputValue.length > 4)
      setCategories([...categories, inputValue]);
      SetInputValue("");
  

  };

  return (
    <>

      <h1>MY GIF APP</h1>
      <button onClick={addCategory}> Add Category</button>
      <input type="text" value={inputValue} onChange={(e) => SetInputValue(e.target.value)} />
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>
        }) }
        {/* <li>ABC </li> */}


      </ol>

    </>
  )
}