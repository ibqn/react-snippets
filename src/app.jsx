import { useState } from 'react'

import AddSnippet from './components/add-snippet'
import GlobalStyles from './components/global-styles'
import ListSnippets from './components/list-snippets'

const App = () => {
  const [snippets, setSnippets] = useState([])

  const handleAdd = (newSnippet) => {
    console.log(`handle add ${newSnippet}`)
    setSnippets([...snippets, newSnippet])
  }

  return (
    <>
      <GlobalStyles />
      <div>Snippets</div>
      <AddSnippet addSnippet={handleAdd} />
      <ListSnippets snippets={snippets} />
    </>
  )
}

export default App
