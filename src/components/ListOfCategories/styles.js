import styled, { keyframes, css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100% {
    top: 10px;
  }
`

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
  `

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    margin-bottom: 10px;
    ${props => props.fixed && css`
    ${fadeIn()};
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0, 0.3);
        left: 0;
        margin: 0 auto;
        padding: 5px;
        max-width: 400px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
    `}
`

export const Item = styled.li`
    padding: 0 8px;
`
