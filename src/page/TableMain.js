import React, { useContext, useEffect } from 'react'
import { DataContext } from '../component/provider/DataProvider'
import Header from '../component/displayTable/header/Header'
import DisplayTable from '../component/displayTable/table/DisplayTable'

export const UserContext = React.createContext()
function Table(props) {
  const { newOrderData, data } = useContext(DataContext)
  useEffect(() => {
    if (props.data) {
      console.log(props.data)
      newOrderData(props.data)
    }
  }, [])

  console.log('donnees index', data)
  // const a = data[0]
  // console.log('data', data[0], typeof a, Object.keys(a), Object.keys(a).length)
  return (
    <div>
      <Header />
      <DisplayTable />
    </div>
  )
}

export default Table
