import { useEffect } from 'react'
import Prism from 'prismjs'
import PropTypes from 'prop-types'

// import 'prismjs/themes/prism-solarizedlight.css'
import { useChangeTheme } from '../theme-provider'

import lightTheme from './code-snippet-theme-light'
import darkTheme from './code-snippet-theme-dark'

const CodeSnippet = ({ code, language }) => {
  const [darkMode] = useChangeTheme()

  useEffect(() => {
    Prism.highlightAll()
  }, [darkMode])

  const Theme = darkMode ? darkTheme : lightTheme

  return (
    <Theme>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </Theme>
  )
}

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
}

export default CodeSnippet
