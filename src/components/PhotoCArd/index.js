import React from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearSreen } from '../../hooks/useNearScreen'

const DEF_IMG = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

function PhotoCard ({ id, likes = 0, src = DEF_IMG }) {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearSreen()

  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>

            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' /> {likes} Likes
            </Button>
          </>
      }
    </Article>
  )
}

export { PhotoCard }
