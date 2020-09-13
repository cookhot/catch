// 构建引擎
import Application from './application'

import GameMap from './gameMap'

class Engine {
    public canvas: HTMLCanvasElement;

    private app: Application;

    private running: Boolean;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        // 构建 application
        this.app = new Application(canvas)

        this.running = false

        this.init()
    }

    init() {
        this.app.addView(new GameMap(6, 4))
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