export async function loadImage(src, width, height) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image(width, height)
    image.onload = function () {
      resolve(image)
    }

    image.onerror = function (err) {
      reject(err)
    }

    image.src = src
  })
}

// 生成节点
export type Point = [number, number]

export const DIRECTION: { [propName: string]: Point } = {
  TOP: [-1, 0],
  BOTTOM: [1, 0],
  LEFT: [0, -1],
  RIGHT: [0, 1]
}

interface DisabledFn {
  (point: Point): boolean
}


// 获取随机位置
export class RandomPosition {

  static calculate(point1: Point, point2: Point) {
    const desPoint = [...point1]

    desPoint[0] += point2[0]

    desPoint[1] += point2[1]

    return desPoint;
  }

  // 动态下一位置
  private point: Point;

  private disabledFn: DisabledFn;

  constructor(startPoint: Point, disableFn: DisabledFn) {
    this.point = startPoint

    this.disabledFn = this.disabledFn
  }

  // 获取随机的位置
  public next(): Point {
    const { point } = this

    const cache = {}



    // for (let i = 0; i < )





    // console.log(point)

    return point
  }
}

// 初始化节点
export function buildCanvas(width: number, height: number, style?: Object): HTMLCanvasElement {
  // 设置好 canvas 
  const canvas = document.createElement('canvas')

  canvas.setAttribute('width', `${width}`)
  canvas.setAttribute('height', `${height}`)

  if (style) {
    let keys = Object.keys(style)
    let styleStr = ''
    keys.forEach(key => {
      styleStr += `${key}: ${style[key]};`
    })

    if (styleStr) {
      canvas.setAttribute('style', styleStr)
    }
  }

  document.body.appendChild(canvas)
  return canvas
}
