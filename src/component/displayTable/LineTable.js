import React from 'react'

function LineTable(props) {
  const line = props.line
  // console.log('line', line)
  // Object.entries(line).map((value, key) => console.log('value', value))

  return Object.entries(line).map((value, key) => <td key={key}>{value[1]}</td>)
}

export default LineTable
