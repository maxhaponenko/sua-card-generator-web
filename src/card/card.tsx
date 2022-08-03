import { useState } from 'react'
import moment from 'moment'
import bgImage from './background-layers.png'
import CalendarIcon from './Calendar.png'
import Logo from './logo.png'
import './card.scss'
// import { useStores, rootStore } from 'renderer/store/root.store'
// import { useEffect } from 'react'
// import { Rows } from 'renderer/store/card-gererator.store'
// const ipcRenderer = require('electron').ipcRenderer

export default function Card() {
  // const {
  //   cardGeneratorStore: {
  //     currentRow,
  //     markAsDone
  //   }
  // } = useStores()

  // async function processExport() {
  //   if (!currentRow) return
  //   try {
  //     await ipcRenderer.invoke('generate-pdf', currentRow.id)
  //     markAsDone()
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }

  // async function processUpload() {
  //   try {
  //     await ipcRenderer.invoke('upload-csv')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     processExport()
  //   }, 2000)
  // }, [currentRow])

  // if (!currentRow) {
  //   return <button className='upload-csv-btn' onClick={() => processUpload()}>Upload CSV</button>
  // }

  const [card, setCard] = useState({
    name: '',
    date: '',
    text: '',
    image: {
      shape: 'portrait',
      base64: ''
    }
  })

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
      width: 30,
      height: 50
    }
  }

  return (

    <div className="card-generator">
      <div className="inner-container">

        <img className="background-layer" src={bgImage} alt="" />
        <div
          className={`image ${card.image.shape}`}
          style={{
            backgroundImage: `url(${card.image.base64})`,
            width: `${getImageDimensions().width}vw`,
            height: `${getImageDimensions().height}vw`,
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
          className={`text ${card.image.shape === 'portrait' ? 'left' : ''}`}
          style={{ fontSize, lineHeight: `${fontSize + 5}px` }}
        >
          {card.text}
        </div>
        <img className={`logo ${card.image.shape === 'portrait' ? 'top-left' : 'bottom-right'}`} src={Logo} alt="" />
      </div>
    </div>
  )
}
