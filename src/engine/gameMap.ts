import * as d3 from 'd3'
import CanvasRenderView from './canvasRenderView'

// console.log(d3)

class GameMap extends CanvasRenderView {
    private cols: number;

    private rows: number;

    constructor(cols: number, rows: number) {
        super()
        this.cols = cols

        this.rows = rows
    }

    update() {
        return false
    }

    render() {
        // 绘制列表
        const context = this.getContext()

        const width = this.getWidth()

        const height = this.getHeight()

        const padding = this.padding;

        const yList = d3.range(0, this.rows, 1).map(v => `${v}`)

        const xList = d3.range(0, this.cols, 1).map(v => `${v}`)

        const yScale = d3.scaleBand().range([padding, height]).domain(yList)

        const xScale = d3.scaleBand().range([padding, width]).domain(xList)

        context.strokeStyle = '#ddd'
        context.lineWidth = 1

        context.beginPath()

        for (let i = 0, length = yList.length; i <= length; i++) {
            let yPosition = yScale(yList[i]) + .5
            context.moveTo(padding, yPosition)
            context.lineTo(width, yPosition)
        }
        context.moveTo(padding, height + .5)
        context.lineTo(width, height + .5)

        for (let i = 0, length = xList.length; i <= length; i++) {
            let xPosition = xScale(xList[i]) + .5
            context.moveTo(xPosition, padding)
            context.lineTo(xPosition, height)
        }
        context.moveTo(width + .5, padding)
        context.lineTo(width + .5, height)

        context.closePath()

        context.stroke()
    }
}

export default GameMap