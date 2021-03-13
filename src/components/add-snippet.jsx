import { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { useTheme, makeStyles } from '@material-ui/core/styles'
import { findByLabelText } from '@testing-library/dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 830,
    marginTop: theme.spacing(4),
  },
  input: {},
  button: {
    marginTop: theme.spacing(1),
    alignSelf: 'flex-end',
  },
}))

const AddSnippet = (props) => {
  const theme = useTheme()
  const classes = useStyles(theme)

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
    <div className={classes.root}>
      <TextField
        className={classes.input}
        label="Snippet"
        multiline
        onChange={handleChange}
        value={snippet}
        fullWidth
        rows={8}
        placeholder="Paste your snippet here"
        variant="outlined"
      />
      <Button className={classes.button} onClick={handleAdd}>
        add
      </Button>
    </div>
  )
}

AddSnippet.propTypes = {
  addSnippet: PropTypes.func.isRequired,
}

export default AddSnippet
