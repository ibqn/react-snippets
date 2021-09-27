import { useEffect } from 'react'
import Prism from 'prismjs'
import PropTypes from 'prop-types'

import { useChangeTheme } from 'theme-provider'

// import 'prismjs/themes/prism-solarizedlight.css'
import { lightTheme, darkTheme } from './code-snippet-themes'

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
