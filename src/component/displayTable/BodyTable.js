import React from 'react'
import BodyStyle from './BodyStyle.module.css'
import LineTable from './LineTable'

function BodyTable(props) {
  const data = props.data

  return (
    <tbody className={BodyStyle.body}>
      {data.map((line) => (
        <tr key={line}>
          <LineTable key={line} line={line} />
        </tr>
      ))}
    </tbody>
  )
}

export default BodyTable
