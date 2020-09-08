import View from './view'

class CanvasContextView implements  View {
    private context: CanvasRenderingContext2D;

    setContext(context: CanvasRenderingContext2D) {
        this.context = context
    }

    getContext () {
        return this.context
    }

    render () {
        
    }

    update () {
        return false
    }

}

export default CanvasContextView