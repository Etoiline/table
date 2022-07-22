import React from 'react'

export default function SelectMaxEntries(props) {
  return (
    <div>
      Show&nbsp;
      <select
        defaultValue={10}
        onChange={(event) => {
          props.setFunction(parseInt(event.target.value))
        }}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      &nbsp;entries
    </div>
  )
}
