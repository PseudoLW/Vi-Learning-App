import { startFrontend } from "./view/app";

function main() {
    const app = document.createElement('div');
    app.id = 'container'
    document.body.appendChild(app);
    startFrontend(app);
}

main();