import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'

function App () {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
    </div>
  )
}

export { App }
