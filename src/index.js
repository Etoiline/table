import React, { useState, useEffect } from 'react'
import tableStyle from './index.module.css'
import DisplayTable from './page/DisplayTable'
import SelectMaxEntries from './component/selectMaxEntries/SelectMaxEntries'
import Search from './component/search/Search'
import TablePagination from './component/tablePagination/tablePagination'

export const Table = ({ data }) => {
  console.log('initialisation', data)

  const title = Object.keys(data[0])
  console.log('values', Object.values(data[0]))

  // ESSAI POUR LA RECHERCHE DANS LE TABLEAU
  // const values = Object.values(data[0])
  // const fctSome = (element) => element.toLowerCase().includes('al')
  // console.log('test', values, values.some(fctSome))
  // const filteredData = data.filter((d) =>
  //   Object.values(d).some((element) => element.includes('al'))
  // )
  // console.log('filtered Data', filteredData)

  // filtres du tableau
  const [query, setQuery] = useState('')
  const [maxEntries, setMaxEntries] = useState(10)
  const [displayedData, setDisplayedData] = useState(data.slice(0, 10)) // par défaut on affiche les données de 0 à 10
  const [currentTablePage, setCurrentTablePage] = useState(1)
  const [dataToDisplayLength, setDataToDisplayLength] = useState(data.length)

  useEffect(() => {
    // filtre des résultats selon la recherche
    const filteredData = data.filter((d) =>
      Object.values(d).some((element) =>
        element.toLowerCase().includes(query.toLowerCase())
      )
    )

    // données à afficher en tenant compte du maxEntries
    const dataToDisplay = filteredData.slice(
      maxEntries * currentTablePage - maxEntries,
      maxEntries * currentTablePage
    )
    setDisplayedData(dataToDisplay)
    setDataToDisplayLength(filteredData.length)
    console.log('filteredDat', filteredData)
  }, [query, maxEntries, currentTablePage])

  return (
    <section>
      <div className={tableStyle.header}>
        <SelectMaxEntries setFunction={setMaxEntries} />
        <Search setFunction={setQuery} />
      </div>
      <DisplayTable title={title} data={displayedData} />
      <div>
        <TablePagination
          dataToDisplayLength={dataToDisplayLength}
          maxEntries={maxEntries}
          currentTablePage={currentTablePage}
          setFunction={setCurrentTablePage}
        />
        <p>{currentTablePage}</p>
      </div>
    </section>
  )
}
