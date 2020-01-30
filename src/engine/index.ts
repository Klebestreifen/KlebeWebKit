import * as $ from 'jquery';
import * as UUIDv4 from 'uuid/v4';
import { SVGViewBoxRect } from './SVGTools';

export function defaultValue<T>(value: T, defValue: T): T{
    return ((value === undefined) || (value === null)) ? defValue : value;
}

export function getRatio(size: ISize2): number{
    return size.width / size.height;
}

export class Rect implements IRect {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    constructor(x: number, y: number, width: number, height: number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public getEnd(): IVector2{
        return {
            x: this.x + this.width,
            y: this.y + this.height
        };
    }
}

export function dprint(msg: any){
    if(__DEF.buildInfo.dev) console.log(msg);
}

export interface IVector2{
    x: number;
    y: number;
}

export interface ISize2{
    width: number;
    height: number;
}

export interface IRect extends IVector2, ISize2 {}

export interface ILink{
    text?: string;
    href: string;
}

export interface ICommonProps extends React.Props<null>{
    id?: string;
    className?: string;
}

export interface ISVGChildProps{
    pixelSize: number;
    viewBoxRect: SVGViewBoxRect;
}

export interface ReducerActionObject<T>{
    type: T;
    payload?: any;
}

export function copyAndPatch<T>(original: T, patch: (original: T)=>T): T{
    return patch(copy(original));
}

export function copy<T>(tc: T): T{
    return Object.assign({}, tc);
}

export function roundToDate(startYear: number, round: number): string{
    let   month: number | string = (round % 12) + 1;
    const year = Math.floor(round / 12) + startYear;

    month = ((_month)=>{
        switch(_month) {
            case 1: return 'Januar';
            case 2: return 'Februar';
            case 3: return 'März';
            case 4: return 'April';
            case 5: return 'Mai';
            case 6: return 'Juni';
            case 7: return 'Juli';
            case 8: return 'August';
            case 9: return 'September';
            case 10: return 'Oktober';
            case 11: return 'November';
            case 12: return 'Dezember';
        }
        return _month
    })(month);

    return `${month} ${year}`;
}

export function getRoundToDateFunction(startYear: number): (round: number)=>string {
    return (round: number)=>roundToDate(startYear, round);
}

export enum ReduxActions{
    INIT = "@@INIT"
}

export abstract class WithID{
    private id: string = UUIDv4();
    public getID(){
        return this.id;
    }
}