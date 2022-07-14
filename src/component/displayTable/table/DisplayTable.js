import React, { useContext } from 'react'
import HeaderTable from './HeaderTable'
import BodyTable from './BodyTable'
import TableStyle from './TableStyle.module.css'
import { DataContext } from '../../provider/DataProvider'

function DisplayTable(props) {
  const data = useContext(DataContext)
  console.log('dataDisplay', data)
  const title = Object.keys(data[0]) // extrait les noms des colonnes
  // const size = title.length
  // console.log(data, title, size)
  return (
    <div>
      <table className={TableStyle.table}>
        <HeaderTable header={title} />
        <BodyTable data={data} />
      </table>
    </div>
  )
}

export default DisplayTable
