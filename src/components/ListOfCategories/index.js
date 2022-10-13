import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

const API_URL = 'https://petgram-server-daniel-dtheran1.vercel.app/categories'
function ListOfCategories () {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List className={fixed && 'fixed'}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>
        )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
export { ListOfCategories }
