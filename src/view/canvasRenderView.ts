import View from '../engine/view'

abstract class CanvasContextView implements View {
    private context: CanvasRenderingContext2D;

    setContext(context: CanvasRenderingContext2D) {
        this.context = context
    }

    getContext(): CanvasRenderingContext2D {
        return this.context
    }

    abstract render(): void

    abstract update(): boolean
}

export default CanvasContextView