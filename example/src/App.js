import React from 'react'

import { Table } from '@laura/table'
import '@laura/table/dist/index.css'


const App = () => {
  const dataToDisplay = [{"Col1":"Value11", "Col2":"Value12", "Col3":"Value13"}, 
  {"Col1":"Value21", "Col2":"Value22", "Col3":"Value23"}, 
  {"Col1":"Value31", "Col2":"Value32", "Col3":"Value33"}, 
  {"Col1":"Value41", "Col2":"Value42", "Col3":"Value43"}, ]
  return <Table data={dataToDisplay}/>
}

export default App
