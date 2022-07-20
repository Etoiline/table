import React from 'react'
import styles from './styles.module.css'
import DataProvider from './component/provider/DataProvider'
import TableMain from './page/TableMain'

export const UserContext = React.createContext()
export const Table = ({ data }) => {
  console.log('initialisation', data)
  return (
    <DataProvider>
      <div className={styles.test}>
        <TableMain data={data} />
      </div>
    </DataProvider>
  )
}
