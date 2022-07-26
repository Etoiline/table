import React from 'react'

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
        // Si la page actuelle n'est pas la première, on affiche le bouton précédent
        props.currentTablePage !== 1 ? (
          <button
            onClick={() => {
              handleNavigate(props.currentTablePage - 1)
            }}
          >
            Previous
          </button>
        ) : (
          ''
        )
      }
      {
        // Créer un bouton pour chaque page
        listPages.map((page) => {
          return (
            <button
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
        props.currentTablePage !== nbPages ? (
          <button
            onClick={() => {
              handleNavigate(props.currentTablePage + 1)
            }}
          >
            Next
          </button>
        ) : (
          ''
        )
      }
    </div>
  )
}
