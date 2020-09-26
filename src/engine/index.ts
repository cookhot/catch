// 构建引擎
import Application from '../application'
import CanvasContextView from '../view/canvasRenderView'


interface EngineOption {
    interval?: number;
    rows: number;
    cols: number;
    padding: number;
}

const defaultEngineOption: EngineOption = {
    interval: 1000,
    rows: 4,
    cols: 6,
    padding: 30
}

class Engine {
    public canvas: HTMLCanvasElement;

    private running: Boolean;

    private options: EngineOption;

    private queue: CanvasContextView[];

    constructor(canvas: HTMLCanvasElement, options?: EngineOption) {
        this.canvas = canvas

        // 设置配置
        this.options = Object.assign({}, defaultEngineOption, options)

        this.running = false

        this.queue = []

        const { rows, cols, padding } = this.options

        Application.initApp(canvas, cols, rows, padding)
    }

    public addView(view: CanvasContextView) {
        this.queue.push(view)
    }

    private render() {
        const { queue } = this

        for (let view of queue) {
            if (view) {
                view.render()

                view.update()
            }
        }
    }

    // 运行
    run() {
        if (!this.running) {
            return
        }

        requestAnimationFrame(() => {
            this.render()

            this.run()
        })
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