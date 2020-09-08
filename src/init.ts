// 初始化节点
function init(width: number, height: number, style?: Object): HTMLCanvasElement {
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


export default init