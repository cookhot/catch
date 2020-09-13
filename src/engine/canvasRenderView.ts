import View from './view'
import Application from './application'

abstract class CanvasContextView implements View {
    private app: Application;

    private context: CanvasRenderingContext2D;

    setContext(context: CanvasRenderingContext2D) {
        this.context = context
    }

    getContext(): CanvasRenderingContext2D {
        return this.context
    }

    setApp(app: Application) {
        this.app = app
    }

    getApp(): Application {
        return this.app
    }

    abstract render(): void

    abstract update(): boolean
}

export default CanvasContextView