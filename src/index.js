import React, { useState, useEffect } from 'react'
import tableStyle from './index.module.css'
import DisplayTable from './page/DisplayTable'
import SelectMaxEntries from './component/selectMaxEntries/SelectMaxEntries'
import Search from './component/search/Search'

export const Table = ({ data }) => {
  console.log('initialisation', data)

  const title = Object.keys(data[0])
  console.log('values', Object.values(data[0]))

  // ESSAI POUR LA RECHERCHE DANS LE TABLEAU
  // const values = Object.values(data[0])
  // const fctSome = (element) => element.includes('al')
  // console.log(values.some(fctSome))
  // const filteredData = data.filter((d) =>
  //   Object.values(d).some((element) => element.includes('al'))
  // )
  // console.log('filtered Data', filteredData)

  // filtres du tableau
  const [query, setQuery] = useState('')
  const [maxEntries, setMaxEntries] = useState(10)
  const [displayedData, setDisplayedData] = useState(data.slice(0, 10))

  useEffect(() => {
    // filtre des résultats selon la recherche
    const filteredData = data.filter((d) =>
      Object.values(d).some((element) => element.includes(query))
    )

    setDisplayedData(filteredData)
    console.log('filteredDat', filteredData)
  }, [query, maxEntries])

  return (
    <section>
      <div className={tableStyle.header}>
        <SelectMaxEntries setFunction={setMaxEntries} />
        <Search setFunction={setQuery} />
      </div>
      <DisplayTable title={title} data={displayedData} />
      <div>
        <p>footer</p>
      </div>
    </section>
  )
}
