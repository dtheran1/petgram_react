import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCard'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCarditWithQuery'

function App () {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId}/>
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </>
      }
    </div>
  )
}

export { App }
