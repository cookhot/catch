import View from './view'

abstract class CanvasContextView implements View {
    private width: number;

    private height: number;

    private _padding: number;

    public get padding(): number {
        return this._padding;
    }
    public set padding(value: number) {
        this._padding = value;
    }

    private context: CanvasRenderingContext2D;

    setContext(context: CanvasRenderingContext2D) {
        this.context = context
    }

    setWidth(width: number) {
        this.width = width
    }

    getWidth() {
        return this.width
    }

    setHeight(height: number) {
        this.height = height
    }

    getHeight() {
        return this.height
    }

    getContext() {
        return this.context
    }

    abstract render(): void

    abstract update(): boolean
}

export default CanvasContextView