import React from 'react'
import HeaderTable from './HeaderTable'
import BodyTable from './BodyTable'
import TableStyle from './TableStyle.module.css'

function DisplayTable(props) {
  const data = props.data
  const title = Object.keys(data[0]) // extrait les noms des colonnes
  const size = title.length
  console.log(data, title, size)
  return (
    <div>
      <h1>Table</h1>
      <table className={TableStyle.table}>
        <HeaderTable header={title} />
        <BodyTable data={data} />
      </table>
    </div>
  )
}

export default DisplayTable
