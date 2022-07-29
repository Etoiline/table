import React from 'react'

import { Table } from '@laura/table'
import '@laura/table/dist/index.css'

import { contentStore } from './store/LocalStore'


const App = () => {
  return <Table data={contentStore}/>
}

export default App
