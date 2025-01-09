import { render } from "preact";
function App() {
    return <svg>
        <rect x={10} y={10} width={20} height={10}></rect>
    </svg>;
}
export function startFrontend(parent: HTMLElement) {
    render(<App />, parent);
}