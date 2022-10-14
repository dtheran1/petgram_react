import React from 'react'
import { PhotoCard } from '../PhotoCard'

function ListOfPhotoCard () {
  return (
    <ul>
      {
            [1, 2, 3, 4, 5, 6, 7].map(id => <PhotoCard key={id} id={id} />)
        }
    </ul>
  )
}

export { ListOfPhotoCard }
