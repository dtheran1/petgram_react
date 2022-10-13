import React from 'react'
import { PhotoCard } from '../PhotoCArd'

function ListOfPhotoCard () {
  return (
    <ul>
      {
            [1, 2, 3].map(id => <PhotoCard key={id} />)
        }
    </ul>
  )
}

export { ListOfPhotoCard }
