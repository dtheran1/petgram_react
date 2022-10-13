import React from 'react'
import { Anchor, Image } from './styles'

const DEF_IMG = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

function Category ({ cover = DEF_IMG, path, emoji = '=D' }) {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}

export { Category }
