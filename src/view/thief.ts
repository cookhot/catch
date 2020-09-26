import CanvasRenderView from './canvasRenderView'
import Application from '../application'

import { RandomPosition, Point } from '../utils'
export default class Thief extends CanvasRenderView {
  private _image: HTMLImageElement

  public get image(): HTMLImageElement {
    return this._image
  }
  public set image(value: HTMLImageElement) {
    this._image = value
  }

  private _point: Point;

  public get point(): Point {
    return this._point;
  }
  public set point(value: Point) {
    this._point = value;
  }

  private random: RandomPosition

  constructor(image: HTMLImageElement, startX: number, startY: number) {
    super()
    this.image = image

    this.point = [startX, startY]

    const app: Application = Application.getApp()

    console.log(app)

    const { cols, rows } = app

    const disabledFn = ((cols, rows) => {
      return function (point: Point): boolean {
        console.log(point, cols, rows)
        return false
      }
    })(cols, rows)

    // 获取random, 设置边界
    this.random = new RandomPosition([startX, startY], disabledFn)
  }

  render() {
    const app: Application = Application.getApp()

    const { xScale, yScale, context, padding } = app

    const { point } = this

    const { image } = this

    const { width, height } = image

    context.save()
    // 绘制图片动画
    context.translate(padding - width / 2, padding - height / 2)

    let xPosition = xScale(`${point[0]}`)

    let yPosition = yScale(`${point[1]}`)

    // 旋转图片
    context.drawImage(image, xPosition, yPosition, width, height)

    context.restore()
  }

  update() {
    const app: Application = Application.getApp()

    // const { cols, rows, context } = app

    // 获取下一个节点 
    this.point = this.random.next()

    // console.log(this.point)

    // 更新用户图像
    return true
  }
}