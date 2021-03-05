import { useState } from 'react'
import PropTypes from 'prop-types'

const AddSnippet = (props) => {
  const { addSnippet } = props
  const [snippet, setSnippet] = useState('')

  const handleChange = ({ target: { value } }) => {
    console.log(value)
    setSnippet(value)
  }

  const handleAdd = (event) => {
    event.preventDefault()

    console.log(`add snippet with code ${snippet}`)
    snippet && addSnippet(snippet)
    setSnippet('')
  }

  return (
    <form>
      <textarea onChange={handleChange} value={snippet} cols="30" rows="10" />
      <button onClick={handleAdd}>add</button>
    </form>
  )
}

AddSnippet.propTypes = {
  addSnippet: PropTypes.func.isRequired,
}

export default AddSnippet
