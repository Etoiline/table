import React from 'react'
import BodyStyle from './BodyStyle.module.css'
import LineTable from './LineTable'
import { useContext } from 'react'
import { DataContext } from '../../provider/DataProvider'

function BodyTable() {
  const data = useContext(DataContext)
  console.log('contexte', data)
  // const data = props.data
  // data.map((line, key) => console.log('line', line, 'key', key))

  return (
    <tbody className={BodyStyle.body}>
      {data.map((line, key) => (
        <tr key={key}>
          <LineTable line={line} />
        </tr>
      ))}
    </tbody>
  )
}

export default BodyTable
