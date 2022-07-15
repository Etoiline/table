import React from 'react'
import styles from './styles.module.css'
import DataProvider from './component/provider/DataProvider'
import TableMain from './page/TableMain'

export const UserContext = React.createContext()
export const Table = ({ data }) => {
  console.log('initialisation', data)
  // const a = data[0]
  // console.log('data', data[0], typeof a, Object.keys(a), Object.keys(a).length)
  return (
    <DataProvider>
      <div className={styles.test}>
        <TableMain data={data} />
        {/* <Header />
        <DisplayTable /> */}
      </div>
    </DataProvider>
  )
}
