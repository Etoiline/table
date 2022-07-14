import React from 'react'
import SortStyle from './SortStyle.module.css'

function SortTable() {
  return (
    <div className={SortStyle.main}>
      <i className='fa-solid fa-caret-up' />
      <i className='fa-solid fa-caret-down' />
    </div>
  )
}

export default SortTable
