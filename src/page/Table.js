import React from 'react'
/**
 * The HTML Table element in itself, contains all the results
 */
export default function Table(props) {
  const headerTitle = props.title.map((elt) => {
    const tmp = elt.split(/(?=[A-Z])/).join(' ')
    return tmp[0].toUpperCase() + tmp.slice(1)
  })

  console.log(headerTitle)

  return (
    // <table className='table-auto w-full text-left'>
    //   <thead className=''>
    //     <tr>
    //       {
    //         // The list of string "cols" is every table columns we need to create
    //         props.cols.map((col, index) => {
    //           return <th key={index}>{col}</th>
    //         })
    //       }
    //     </tr>
    //   </thead>
    //   <tbody className='border-y border-black'>
    //     {props.items.map((item, index) => {
    //       // create a row for each item
    //       return (
    //         <tr
    //           className={
    //             'leading-loose border-b border-slate-400 ' +
    //             (index % 2 == 0 ? 'bg-slate-100' : '')
    //           }
    //           key={index}
    //         >
    //           {
    //             // create a table data for each columns, with every value of the item
    //             item.map((value, index) => {
    //               return <td key={index}>{value}</td>
    //             })
    //           }
    //         </tr>
    //       )
    //     })}
    //   </tbody>
    // </table>
  )
}
