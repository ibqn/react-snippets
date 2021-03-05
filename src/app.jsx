import { useState } from 'react'

import './app.css'
import AddSnippet from './components/add-snippet'
import ListSnippets from './components/list-snippets'

const App = () => {
  const [snippets, setSnippets] = useState([])

  const handleAdd = (newSnippet) => {
    console.log(`handle add ${newSnippet}`)
    setSnippets([...snippets, newSnippet])
  }

  return (
    <>
      <div>Snippets</div>
      <AddSnippet addSnippet={handleAdd} />
      <ListSnippets snippets={snippets} />
    </>
  )
}

export default App
