import CanvasContextView from './canvasRenderView'

class Application {
    private context: CanvasRenderingContext2D;

    private queue: CanvasContextView[];

    private padding: number;

    private height: number;

    private width: number;

    constructor(canvas: HTMLCanvasElement, padding: number = 20) {
        // 检查
        if (!canvas) {
            throw new TypeError('请注入先注入 canvas')
        }

        this.context = canvas.getContext('2d')

        this.padding = padding

        this.width = canvas.width - padding * 2

        this.height = canvas.height - padding * 2

        this.queue = []
    }

    addView(view: CanvasContextView) {
        if (!view) {
            return
        }
        view.setContext(this.context)
        view.setWidth(this.width)
        view.setHeight(this.height)
        view.padding = this.padding
        this.queue.push(view)
    }


    render() {
        const { context, queue } = this
        // 清空原来的画布
        const { width, height } = context.canvas
        this.context.clearRect(0, 0, width, height)

        for (let view of queue) {
            // 绘制图形
            view.render()
        }
    }

    update() {
        const { queue } = this

        let delIndexGroup = []

        for (let index = 0, length = queue.length; index < length; index++) {
            let view = queue[index]
            let result = view.update()
            if (!result) {
                delIndexGroup.push(index)
            }
        }

        // 删除不更新
        if (delIndexGroup.length > 0) {
            for (let delIndex of delIndexGroup) {
                queue.splice(delIndex, 1)
            }
        }
    }
}

export default Application