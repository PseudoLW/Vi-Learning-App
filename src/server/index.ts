export { };
const port = 8080, hostname = 'localhost';
console.log(`Server starting in http://${hostname}:${port}/`);

// Build Env
Bun.serve({
    port, hostname,
    async fetch(req) {
        const url = new URL(req.url);
        console.log(`Got a request from ${url.pathname}`);

        if (url.pathname === "/") {
            return new Response(Bun.file('./src/server/template.html'));
        }
        if (url.pathname === "/script.js") {
            const buildResult = await Bun.build({
                entrypoints: ['./src/client/index.ts'],
                sourcemap: 'inline'
            });
            if (buildResult.success) {
                return new Response(buildResult.outputs[0]);
            }
        }
        return new Response("404!");
    },
});