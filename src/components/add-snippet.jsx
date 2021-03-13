import { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

import { useTheme, makeStyles } from '@material-ui/core/styles'

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

const AddButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`

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
      <AddButton className={classes.button} onClick={handleAdd}>
        add
      </AddButton>
    </div>
  )
}

AddSnippet.propTypes = {
  addSnippet: PropTypes.func.isRequired,
}

export default AddSnippet
