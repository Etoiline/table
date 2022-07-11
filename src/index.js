import React from 'react'
import styles from './styles.module.css'
import DisplayTable from './component/displayTable/DisplayTable'

export const Table = ({ data }) => {
  const a = data[0]
  console.log('data', data[0], typeof a, Object.keys(a), Object.keys(a).length)
  return (
    <div className={styles.test}>
      <DisplayTable data={data} />
    </div>
  )
}
