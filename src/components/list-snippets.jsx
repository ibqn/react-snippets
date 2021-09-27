import CodeSnippet from 'components/code-snippet'

const ListSnippets = (props) => {
  const { snippets } = props
  return (
    <ul>
      {snippets?.map((snippet, index) => (
        <li key={index}>
          <CodeSnippet language={'javascript'} code={snippet} />
        </li>
      ))}
    </ul>
  )
}

export default ListSnippets
