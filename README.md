# @laura/table

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@laura/table.svg)](https://www.npmjs.com/package/@laura/table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @laura/table
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from '@laura/table'
import '@laura/table/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent data={[]} />
  }
}
```

Ci-dessous deux d'images montrant l'utilisation de la librairie.
Le composant doit être utilisé avec un paramètre : un tableau des données à afficher. Ces données doivent être sous forme d'ojbet [{colone:valeur, colone2:valeur2}, {colone:valeur3, colone2:valeur4}]


![Cover](https://github.com/Etoiline/table/blob/tableV2/img/CodeTable.png)
![Cover](https://github.com/Etoiline/table/blob/tableV2/img/RenduTable.png)

## License

MIT © [Etoiline](https://github.com/Etoiline)
