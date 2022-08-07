import { useState } from 'react'
// import { useStores, rootStore } from 'renderer/store/root.store'
// import { useEffect } from 'react'
import moment from 'moment'
import { Card } from '@/app/create-pdf-card-flow/create-pdf-card-flow.slice'
import bgImage from './assets/background-layers.png'
import CalendarIcon from './assets/Calendar.png'
import Logo from './assets/logo.png'
import './card.scss'

export interface StateProps {
  card: Card;
}
export interface DispatchProps {
  onTextChange: (value: string) => void;
  onNameChange: (value: string) => void;
  uploadImage: (value: any) => void;
}
interface Props extends StateProps, DispatchProps {}

export default function Card(props: Props) {
  const { card } = props
  const imageShape = 'square' || 'album' || 'portrait'

  const currentRow = {
    data: {
      name: '',
      date: '',
      text: 'Some text here tooooo',
      image: {
        name: 'name',
        shape: 'portrait',
        url: ''
      }
    }
  }

  let fontSize;
  if (card.text.length < 200) fontSize = 25;
  else if (card.text.length) fontSize = 22;
  else if (card.text.length < 400) fontSize = 20;
  else fontSize = 17;

  function markAsDone() {
    console.log('')
  }

  // eslint-disable-next-line arrow-body-style
  const getImageDimensions = () => {
    // const image = card;

    // const IMAGE_WINDOW_WIDTH_SIZE: any = {
    //   album: 52,
    //   square: 43,
    //   portrait: 36,
    // }

    // const imageWidth_vw = IMAGE_WINDOW_WIDTH_SIZE[image.shape]
    // const ratio = image.width / imageWidth_vw
    // const imageHeight_vw = image.height / ratio

    // const result = { width: imageWidth_vw, height: imageHeight_vw }

    // if (result.width > 55 || result.height > 55) {
    //   result.width *= 0.8
    //   result.height *= 0.8
    // }
    // if (result.width > 65 || result.height > 65) {
    //   result.width *= 0.65
    //   result.height *= 0.65
    // }
    // if (result.width > 75 || result.height > 75) {
    //   result.width *= 0.5
    //   result.height *= 0.5
    // }

    // return result

    return {
      width: 44,
      height: 62
    }
  }

  return (

    <div className="card-generator">
      <div className="inner-container">

        <img className="background-layer" src={bgImage} alt="" />
        <div
          className={`image ${imageShape}`}
          style={{
            backgroundImage: `url(${card.image.base64})`,
            width: `${getImageDimensions().width}%`,
            height: `${getImageDimensions().height}%`,
          }}
        >
          <span className="add-image">Add image</span>
        </div>
        <div className="sign-container">
          <div>{card.name}</div>
          <div>
            <img src={CalendarIcon} alt="" />
            {moment(new Date()).format('DD/MM/YYYY')}
          </div>
        </div>
        <div
          onClick={() => markAsDone()}
          className={`text ${imageShape === 'portrait' ? 'left' : ''}`}
          style={{ fontSize, lineHeight: `${fontSize + 5}px` }}
        >
          {card.text}
        </div>
        <img className={`logo ${imageShape === 'portrait' ? 'top-left' : 'bottom-right'}`} src={Logo} alt="" />
      </div>
    </div>
  )
}
