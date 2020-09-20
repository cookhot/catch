// 构建引擎
import Application from './application'

import GameMap from './gameMap'
import Thief from './thief'

async function loadImage(src, width, height) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image(width, height)
        image.onload = function () {
            resolve(image)
        }

        image.onerror = function (err) {
            reject(err)
        }

        image.src = src
    })
}

class Engine {
    public canvas: HTMLCanvasElement;

    private app: Application;

    private running: Boolean;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        // 构建 application
        this.app = new Application(canvas, 6, 4, 30)

        this.running = false

        this.init()
    }

    async init() {
        this.app.addView(new GameMap())

        const thiefImgSrc = require('../assets/img/thief.jpg')

        const thiefImage = await loadImage(thiefImgSrc, 50, 50)

        this.app.addView(new Thief(thiefImage))
    }

    // 运行
    run() {
        if (!this.running) {
            return
        }
        this.app.render()

        // 提供下一个节点
        this.app.update()
    }

    // 启动运行
    start() {
        if (this.running) {
            return
        }

        this.running = true

        this.run()
    }

    // 关闭运行
    stop() {
        if (!this.running) {
            return
        }

        this.running = false
    }

}

export default Engine