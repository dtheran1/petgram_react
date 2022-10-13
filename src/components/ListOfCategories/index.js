import React from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

function ListOfCategories () {
  return (
    <List>
      {
                [1, 2].map(category => <Item key={category}><Category /></Item>
                )
            }

    </List>
  )
}
export { ListOfCategories }
