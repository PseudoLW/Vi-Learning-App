export type Unit = Pixels | Percent;
export type Pixels = { unit: 'px', scale: number; };
export type Percent = { unit: '%', scale: number; };
export type Remainder = { unit: '', scale: number; };

export function pixels(n: number): Pixels {
    return { unit: 'px', scale: n };
}

export function percent(n: number): Percent {
    return { unit: '%', scale: n };
}

export function remainder(n = 1): Remainder {
    return { unit: '', scale: n };
}

export function scale(parentSize: number, size: Unit) {
    if (size.unit === 'px') return size.scale;
    else return parentSize * size.scale / 100;
}
