import React from 'react'
import tableStyle from './DisplayTable.module.css'

export default function DisplayTable(props) {
  // const headerTitle = props.title.map((elt) => {
  //   const tmp = elt.split(/(?=[A-Z])/).join(' ')
  //   return tmp[0].toUpperCase() + tmp.slice(1)
  // })
  // headerTitle.map((title, key) => console.log('title,', title))
  // props.setFunction([1, 'col'])

  const handleSort = (order, column) => {
    props.setFunction([order, column])
    // console.log('sort asc', order, column)
  }

  return (
    <table className={tableStyle.table}>
      <thead>
        <tr>
          {props.title.map((title, key) => (
            <th
              key={key}
              className={title === props.sortedColumn ? tableStyle.sorted : ''}
            >
              <div className={tableStyle.theadContent}>
                {title
                  .split(/(?=[A-Z])/)
                  .join(' ')[0]
                  .toUpperCase() +
                  title
                    .split(/(?=[A-Z])/)
                    .join(' ')
                    .slice(1)}
                <div className={tableStyle.sort}>
                  <i
                    className='fa-solid fa-caret-up'
                    onClick={() => {
                      handleSort(1, title)
                    }}
                  />
                  <i
                    className='fa-solid fa-caret-down'
                    onClick={() => {
                      handleSort(2, title)
                    }}
                  />
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((line, key) => (
          <tr key={key}>
            {Object.entries(line).map((value, key) => (
              <td
                key={key}
                className={
                  value[0] === props.sortedColumn ? tableStyle.sorted : ''
                }
              >
                {value[1]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
