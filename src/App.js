import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'

function App () {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard />
    </div>
  )
}

export { App }
