import * as d3 from 'd3'
import CanvasRenderView from './canvasRenderView'
import Application from '../application'

class GameMap extends CanvasRenderView {

    constructor() {
        super()
    }

    update() {
        return true
    }

    render() {
        // 绘制列表
        const app = Application.getApp()

        const context = app.context

        const { width, height, padding, xScale, yScale } = app

        context.strokeStyle = '#ddd'
        context.lineWidth = 1

        context.save()

        context.translate(padding, padding)

        context.beginPath()

        const xList = xScale.domain()

        const yList = yScale.domain()

        for (let i = 0, length = yList.length; i <= length; i++) {
            let yPosition = yScale(yList[i]) + .5
            context.moveTo(0, yPosition)
            context.lineTo(width, yPosition)
        }
        context.moveTo(0, height + .5)
        context.lineTo(width, height + .5)

        for (let i = 0, length = xList.length; i <= length; i++) {
            let xPosition = xScale(xList[i]) + .5
            context.moveTo(xPosition, 0)
            context.lineTo(xPosition, height)
        }

        context.moveTo(width + .5, 0)
        context.lineTo(width + .5, height)

        context.closePath()

        context.stroke()

        context.restore();
    }
}

export default GameMap