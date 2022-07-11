import React from 'react'
import HeaderStyle from './HeaderStyle.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderTable(props) {
  const header = props.header
  const headerTitle = header.map((elt) => {
    const tmp = elt.split(/(?=[A-Z])/).join(' ')
    return tmp[0].toUpperCase() + tmp.slice(1)
  })

  return (
    <thead className={HeaderStyle.thead}>
      <tr>
        {headerTitle.map((title) => (
          <>
            <th key={title}>{title}</th>
            {/* <FontAwesomeIcon icon="fa-solid fa-sort-up" /> */}
          </>
        ))}
      </tr>
    </thead>
  )
}

export default HeaderTable
