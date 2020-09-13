import CanvasContextView from './canvasRenderView'

class Application {
    private context: CanvasRenderingContext2D;

    private queue: CanvasContextView[];

    private _padding: number;

    public get padding(): number {
        return this._padding;
    }
    public set padding(value: number) {
        this._padding = value;
    }

    private _height: number;

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }

    private _width: number;

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    private _cols: number;

    public get cols(): number {
        return this._cols;
    }
    public set cols(value: number) {
        this._cols = value;
    }

    private _rows: number;

    public get rows(): number {
        return this._rows;
    }
    public set rows(value: number) {
        this._rows = value;
    }

    constructor(canvas: HTMLCanvasElement, cols: number, rows: number, padding: number = 20) {
        // 检查
        if (!canvas) {
            throw new TypeError('请注入先注入 canvas')
        }

        this.context = canvas.getContext('2d')

        this._cols = cols

        this._rows = rows

        this.padding = padding

        this.width = canvas.width - padding * 2

        this.height = canvas.height - padding * 2

        this.queue = []
    }

    addView(view: CanvasContextView) {
        if (!view) {
            return
        }


        // 添加新视图
        view.setContext(this.context)

        // 注入 app
        view.setApp(this)

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