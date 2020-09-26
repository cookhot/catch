import * as d3 from 'd3'
import { ScaleBand } from 'd3';

export default class Application {
    private static app: Application;

    static initApp(canvas: HTMLCanvasElement, colsSize: number, rowsSize: number, padding: number) {
        Application.app = new Application(canvas, colsSize, rowsSize, padding)
    }

    static getApp(): Application {
        return Application.app;
    }

    public readonly context: CanvasRenderingContext2D;

    private _padding: number;

    public get padding(): number {
        return this._padding;
    }
    public set padding(value: number) {
        this._padding = value;
    }

    private _height: number;

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }

    private _width: number;

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    private _cols: number[];

    public get cols(): number[] {
        return this._cols;
    }
    public set cols(value: number[]) {
        this._cols = value;
    }

    private _rows: number[];

    public get rows(): number[] {
        return this._rows;
    }
    public set rows(value: number[]) {
        this._rows = value;
    }

    // 获取 x 比列尺
    private _xScale: ScaleBand<string>

    public get xScale(): ScaleBand<string> {
        return this._xScale;
    }
    public set xScale(value: ScaleBand<string>) {
        this._xScale = value;
    }

    private _yScale: ScaleBand<string>

    public get yScale(): ScaleBand<string> {
        return this._yScale;
    }
    public set yScale(value: ScaleBand<string>) {
        this._yScale = value;
    }

    constructor(canvas: HTMLCanvasElement, colsSize: number, rowsSize: number, padding: number = 20) {
        // 检查
        if (!canvas) {
            throw new TypeError('请注入先注入 canvas')
        }

        this.context = canvas.getContext('2d')

        // 获取到 xScale 与 yScale
        this._cols = d3.range(0, colsSize, 1)

        this._rows = d3.range(0, rowsSize, 1)

        this.padding = padding

        this.width = canvas.width - padding * 2

        this.height = canvas.height - padding * 2

        this.xScale = d3.scaleBand().range([0, this.width]).domain(this.cols.map(v => `${v}`))

        this.yScale = d3.scaleBand().range([0, this.height]).domain(this.rows.map(v => `${v}`))
    }
}


