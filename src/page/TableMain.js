import React, { useEffect, useState } from 'react'
import SelectMaxEntries from './SelectEntries'


function Table(props) {
  const [maxEntries, setMaxEntries] = useState(10)

  console.log('donnees index', maxEntries)
  // const a = data[0]
  // console.log('data', data[0], typeof a, Object.keys(a), Object.keys(a).length)
  return (
    <section>
      <div className='flex my-6'>
        <SelectMaxEntries setFunction={setMaxEntries} />
      </div>
    </section>
  )
}

export default Table
