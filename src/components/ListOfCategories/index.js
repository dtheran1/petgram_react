import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

const API_URL = 'https://petgram-server-daniel-dtheran1.vercel.app/categories'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

function ListOfCategories () {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (

    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'> <Category /> </Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>
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
