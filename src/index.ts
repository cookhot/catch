import Engine from './engine'

import GameMap from './view/gameMap'
import Thief from './view/thief'

import { loadImage, buildCanvas } from './utils'

const canvas = buildCanvas(600, 400, { border: '1px solid #ddd' })

const engine = new Engine(canvas);

async function init() {
  engine.addView(new GameMap())

  const thiefImgSrc = require('./assets/img/thief.jpg')

  const thiefImage = await loadImage(thiefImgSrc, 40, 40)

  engine.addView(new Thief(thiefImage, 0, 0))

  return engine
}

init().then((engine) => {
  engine.start()
})







