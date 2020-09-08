import * as d3 from 'd3'
import CanvasRenderView from './canvasRenderView'

// console.log(d3)

class GameMap extends CanvasRenderView {
    private cols: number;

    private rows: number;

    private padding: number;

    constructor( cols: number, rows: number ) {
        super()
        this.cols = cols
        
        this.rows = rows

        this.padding = 20
    }

    render() {
        // 绘制列表
        const context = this.getContext()

        const { width, height } = context.canvas

        const yList = d3.range(0, this.rows, 1).map(v => `${v}` )

        const xList = d3.range(0, this.cols, 1).map(v => `${v}` )

        const yScale = d3.scaleBand().range([0, height]).domain(yList)

        const xScale = d3.scaleBand().range([0, width]).domain(xList)

        context.strokeStyle = '#ddd'
        context.lineWidth = 1

        context.beginPath()

        for (let i = 1, length = yList.length; i < length; i++) {
            let yPosition = yScale(yList[i]) + .5
            context.moveTo(0, yPosition)

            context.lineTo(width, yPosition)
        }

        for (let i = 1, length = xList.length; i < length; i++) {
            let xPosition = xScale(xList[i]) + .5
            context.moveTo(xPosition, 0)

            context.lineTo(xPosition, height)
        }

        context.closePath()

        context.stroke()
    }
}

export default GameMap