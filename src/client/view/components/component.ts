import type { Pixels, Remainder } from "../units";

export type AppComponentProps = {
    x: Pixels;
    y: Pixels;
    width: Pixels | Remainder;
    height: Pixels | Remainder;
}