import React from 'react'
import tableStyle from '../index.module.css'

export default function DisplayTable(props) {
  const headerTitle = props.title.map((elt) => {
    const tmp = elt.split(/(?=[A-Z])/).join(' ')
    return tmp[0].toUpperCase() + tmp.slice(1)
  })
  // headerTitle.map((title, key) => console.log('title,', title))

  return (
    <table className={tableStyle.table}>
      <thead>
        <tr>
          {headerTitle.map((title, key) => (
            <th key={key}>
              <div>
                {title}
                {/* <SortTable className={HeaderStyle.sortIcons} /> */}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((line, key) => (
          <tr key={key}>
            {Object.entries(line).map((value, key) => (
              <td key={key}>{value[1]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
