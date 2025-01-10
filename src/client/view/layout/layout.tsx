import { cloneElement, type VNode } from "preact";
import type { AppComponentProps } from "../components/component";
import { pixels, remainder, scale, type Remainder, type Unit } from "../units";


function calculatePadding(
    width: number,
    height: number,
    padding: LayoutProps['padding']
): [number, number, number, number] {
    let l: Unit, r: Unit, t: Unit, b: Unit;
    if (padding === undefined) {
        l = r = t = b = pixels(0);
    } else if ('x' in padding) {
        l = r = padding.x;
        t = b = padding.y;
    } else if ('l' in padding) {
        l = padding.l; r = padding.r;
        t = padding.t; b = padding.b;
    } else {
        l = r = t = b = padding;
    }
    return [scale(width, l), scale(width, r), scale(height, t), scale(height, b)];
}

export type LayoutProps = {
    direction: 'h' | 'v';
    sizes: (Unit | Remainder)[];
    padding?: Unit | { x: Unit; y: Unit; } | { l: Unit; r: Unit; t: Unit; b: Unit; };

    children?: VNode<AppComponentProps> | VNode<AppComponentProps>[];
} & AppComponentProps;
export const Layout = (props: LayoutProps) => {
    const { width, height, x, y, sizes } = props;
    const children = Array.isArray(props.children) ? props.children :
        props.children === undefined ? [] : [props.children];
    const childrenSizing = children.map((_, i) => sizes[i] ?? remainder());
    const usedPixels = childrenSizing.reduce((prev, size) => prev + (size.unit === 'px' ? size.scale : 0), 0)
    const totalScales = childrenSizing.reduce((prev, size) => prev + (size.unit === '' ? size.scale : 0), 0)
    if (props.direction === 'h') {
        return children.map((child, i) => {
            cloneElement(child, {
                const sizing = sizes[i] ?? remainder();
            })
        })
    }

    return <></>;
};