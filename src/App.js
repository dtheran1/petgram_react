import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'

function App () {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </div>
  )
}

export { App }
