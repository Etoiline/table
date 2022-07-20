import React from 'react'

export const Table = ({ data }) => {
  console.log('initialisation', data)

  const title = Object.keys(data[0])

  return (
    <section>
      <Table title={title} items={data} />
    </section>
  )
}
