import { useEffect } from 'react'
import Prism from 'prismjs'
import PropTypes from 'prop-types'
import 'prismjs/themes/prism-solarizedlight.css'

const CodeSnippet = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

CodeSnippet.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
}

export default CodeSnippet
