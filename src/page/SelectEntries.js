import React from 'react'

export default function SelectMaxEntries(setFunction) {
  return (
    <div>
      Show
      <select
        onChange={(event) => {
          setFunction(parseInt(event.target.value))
        }}
      >
        <option value={10} selected>
          10
        </option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      entries
    </div>
  )
}
