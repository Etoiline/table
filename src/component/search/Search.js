import React from 'react'

export default function Search(props) {
  return (
    <div>
      Search :&nbsp;
      <input
        type='text'
        name='tableResearch'
        onChange={(event) => {
          props.setFunction(event.target.value)
        }}
      />
    </div>
  )
}
