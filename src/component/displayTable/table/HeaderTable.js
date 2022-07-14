import React from 'react'
import HeaderStyle from './HeaderStyle.module.css'
import SortTable from '../../sortTable/SortTable'
import { useContext } from 'react'
import { DataContext } from '../../provider/DataProvider'

function HeaderTable(props) {

  const header = props.header
  const headerTitle = header.map((elt) => {
    const tmp = elt.split(/(?=[A-Z])/).join(' ')
    return tmp[0].toUpperCase() + tmp.slice(1)
  })

  return (
    <thead className={HeaderStyle.thead}>
      <tr>
        {headerTitle.map((title, key) => (
          <th key={key}>
            <div className={HeaderStyle.content}>
              {title}
              <SortTable className={HeaderStyle.sortIcons} />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default HeaderTable
