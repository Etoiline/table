import React from 'react'
import PaginationStyle from './TablePagination.module.css'

/**
 * Permet de naviguer entre les pages du tableau
 */
export default function TablePagination(props) {
  const handleNavigate = (destinationPage) => {
    props.setFunction(destinationPage)
  }
  const nbPages = Math.floor(props.dataToDisplayLength / props.maxEntries) + 1
  console.log(
    'table pagination',
    nbPages,
    props.dataToDisplayLength,
    props.maxEntries
  )
  const listPages = []
  for (let j = 1; j <= nbPages; j++) {
    listPages.push(j)
  }

  return (
    <div>
      {
        <button
          className={
            props.currentTablePage === 1
              ? PaginationStyle.inactive
              : PaginationStyle.active
          }
          onClick={() => {
            handleNavigate(props.currentTablePage - 1)
          }}
        >
          Previous
        </button>
      }
      {
        // Créer un bouton pour chaque page
        listPages.map((page) => {
          return (
            <button
              className={
                props.currentTablePage === page
                  ? PaginationStyle.inactive
                  : PaginationStyle.active
              }
              key={page}
              onClick={() => {
                handleNavigate(page)
              }}
            >
              {page}
            </button>
          )
        })
      }
      {
        // si la page n'est pas la dernière, on affiche le bouton suivant

        <button
          className={
            props.currentTablePage === nbPages
              ? PaginationStyle.inactive
              : PaginationStyle.active
          }
          onClick={() => {
            handleNavigate(props.currentTablePage + 1)
          }}
        >
          Next
        </button>
      }
    </div>
  )
}
