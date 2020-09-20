import init from './init'
import Engine from './engine'

const canvas = init(600, 400, { border: '1px solid #ddd' })

new Engine(canvas).start()





