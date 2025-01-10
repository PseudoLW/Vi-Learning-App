import type { AppComponentProps } from "./component";

export type RectProps = {
    color: string;
} & AppComponentProps;
export const Rect = (props: RectProps) => {
    return <>
        <rect x={props.x} y={props.y} width={props.width} height={props.height} fill={props.color}></rect>
    </>;
};