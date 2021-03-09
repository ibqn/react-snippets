import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AddSnippet from './components/add-snippet'
import GlobalStyles from './components/global-styles'
import Header from './components/header'
import ListSnippets from './components/list-snippets'

const App = () => {
  const [snippets, setSnippets] = useState(['const add (a, b) => a + b'])

  const handleAdd = (newSnippet) => {
    console.log(`handle add ${newSnippet}`)
    setSnippets([...snippets, newSnippet])
  }

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <AddSnippet addSnippet={handleAdd} />
            <ListSnippets snippets={snippets} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
