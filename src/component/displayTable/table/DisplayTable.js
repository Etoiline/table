import React, { useContext, useEffect } from 'react'
import HeaderTable from './HeaderTable'
import BodyTable from './BodyTable'
import TableStyle from './TableStyle.module.css'
import { DataContext } from '../../provider/DataProvider'

function DisplayTable(props) {
  const data = useContext(DataContext).data

  console.log('dataDisplay', data)
  let title = []
  let loadedTitle = false
  useEffect(() => {
    if (data.length > 0) {
      console.log('mise è jour des titres')
      title = Object.keys(data[0]) // extrait les noms des colonnes
      loadedTitle = true
    }
  }, [data])
  console.log('title', loadedTitle, title)
  // const size = title.length
  // console.log(data, title, size)

  return (
    <div>
      <table className={TableStyle.table}>
        {loadedTitle ? <HeaderTable header={title} /> : <></>}
        {/* <BodyTable data={data} /> */}
      </table>
    </div>
  )
}

export default DisplayTable
