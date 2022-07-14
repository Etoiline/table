import React, { useState, createContext } from 'react'

export const DataContext = createContext()

function DataProvider(props) {
  const [data, setData] = useState([])
  const newOrderData = (data) => {
    setData(data)
  }
  console.log('provider', data)

  return (
    <DataContext.Provider value={{ data, newOrderData }}>
      {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
