import { Rect } from ".";

export function pc_M(dx: number, dy: number): string{
    return `M ${dx}, ${dy} `;
}

export function pc_H(dx: number): string{
    return `H ${dx} `;
}

export function pc_V(dy: number): string{
    return `V ${dy} `;
}

export function pc_L(dx: number, dy: number){
    return `L ${dx}, ${dy} `;
}

export function pc_Z(): string{
    return 'Z ';
}

export function pc_C(dx1: number, dy1: number, dx2: number, dy2: number, dx: number, dy: number): string{
    return `C ${dx1},${dy1} ${dx2},${dy2} ${dx},${dy} `;
}

export function pc_S(dx2: number, dy2: number, dx: number, dy: number): string{
    return `S ${dx2},${dy2} ${dx},${dy} `;
}

export function pc_Q(dx1: number, dy1: number, dx: number, dy: number): string{
    return `Q ${dx1},${dy1} ${dx},${dy} `;
}

export function pc_T(dx: number, dy: number): string{
    return `T ${dx}, ${dy} `;
}

export function pc_A(rx: number, ry: number, xRot: number, arc: boolean, sweep: boolean, dx: number, dy: number): string{
    return `A ${rx},${ry} ${xRot} ${arc?1:0} ${sweep?1:0} ${dx},${dy} `
}

export function pc_m(dx: number, dy: number): string{
    return `m ${dx}, ${dy} `;
}

export function pc_h(dx: number): string{
    return `h ${dx} `;
}

export function pc_v(dy: number): string{
    return `v ${dy} `;
}

export function pc_l(dx: number, dy: number){
    return `l ${dx}, ${dy} `;
}

export function pc_c(dx1: number, dy1: number, dx2: number, dy2: number, dx: number, dy: number): string{
    return `c ${dx1},${dy1} ${dx2},${dy2} ${dx},${dy} `;
}

export function pc_s(dx2: number, dy2: number, dx: number, dy: number): string{
    return `s ${dx2},${dy2} ${dx},${dy} `;
}

export function pc_q(dx1: number, dy1: number, dx: number, dy: number): string{
    return `q ${dx1},${dy1} ${dx},${dy} `;
}

export function pc_t(dx: number, dy: number): string{
    return `t ${dx}, ${dy} `;
}

export function pc_a(rx: number, ry: number, xRot: number, arc: boolean, sweep: boolean, dx: number, dy: number): string{
    return `a ${rx},${ry} ${xRot} ${arc?1:0} ${sweep?1:0} ${dx},${dy} `
}

export class SVGViewBoxRect {

    public rect: Rect;

    constructor(x: number, y: number, endX: number, endY: number){
        this.rect = new Rect(x, y, endX-x, endY-y)
    }

    public toString(): string{
        return `${this.rect.x} ${this.rect.y} ${this.rect.getEnd().x} ${this.rect.getEnd().y}`;
    }
}