const ListSnippets = (props) => {
  const { snippets } = props
  return (
    <ul>
      {snippets &&
        snippets.map((snippet, index) => (
          <li key={index}>
            <code>{snippet}</code>
          </li>
        ))}
    </ul>
  )
}

export default ListSnippets
