import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Layout } from "./layout/layout";
import { pixels } from "./units";

export type ScreenSize = {
    width: number;
    height: number;
};

function App() {
    const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);
    const [screenHeight, setScreenHeight] = useState(document.body.clientHeight);
    useEffect(() => {
        const frame = () => {
            setScreenWidth(document.body.clientWidth);
            setScreenHeight(document.body.clientHeight);
            window.requestAnimationFrame(frame);
        };
        frame();
    }, []);
    return <svg xmlns="http://www.w3.org/2000/svg" >
        <Layout
            x={pixels(0)} y={pixels(0)} width={pixels(screenWidth)} height={pixels(screenHeight)}
            direction="h" sizes={[]}
            padding={pixels(10)}
        >
            <rect fill={'red'}></rect>
        </Layout>
    </svg>;
}
export function startFrontend(parent: HTMLElement) {
    render(<App />, parent);
}