import CanvasRenderView from './canvasRenderView'
import Application from './application';

export default class Thief extends CanvasRenderView {
  private _image: HTMLImageElement;

  public get image(): HTMLImageElement {
    return this._image;
  }
  public set image(value: HTMLImageElement) {
    this._image = value;
  }

  constructor(image: HTMLImageElement) {
    super()
    this.image = image
  }

  render() {
    const app: Application = this.getApp()

    const { cols, rows, xScale, yScale, context } = app

    const { image } = this

    context.drawImage(image, 0, 0, 60, 40)
  }

  update() {
    return true
  }
}