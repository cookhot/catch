import CanvasRenderView from './canvasRenderView'

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

  }

  update() {
    return true
  }
}