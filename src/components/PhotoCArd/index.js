import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEF_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

function PhotoCard ({ id, likes = 0, src = DEF_IMG }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    import('intersection-observer')
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      })
  }, [ref])

  return (
    <Article ref={ref}>
      {
      show && <>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </a>

        <Button>
          <MdFavoriteBorder size='32px' /> {likes} Likes
        </Button>
      </>
    }
    </Article>
  )
}

export { PhotoCard }
