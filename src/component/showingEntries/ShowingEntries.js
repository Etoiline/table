import React from 'react'

/**
 * Permet de voir le nombre d'entrées affichées
 */
export default function ShowingEntries(props) {
  const firstEntry = (props.currentTablePage - 1) * props.maxEntries + 1
  const lastEntry =
    (props.currentTablePage - 1) * props.maxEntries + props.maxEntries

  return (
    <div>
      {
        // showing 1 to 10 of 12 entries

        <p>
          Showing {firstEntry} to{' '}
          {lastEntry > props.dataToDisplayLength
            ? props.dataToDisplayLength
            : lastEntry}{' '}
          of {props.dataToDisplayLength} entries.
        </p>
      }
    </div>
  )
}
