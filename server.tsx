/**
 * Run this example using:
 * 
 *    deno run --allow-net --allow-read --unstable ./examples/react/server.tsx
 * 
 * if have the repo cloned locally. Unfortunately template rendering does not
 * currently support remote URLs for views, so this example cannot be run directly
 * from this repo.
 * 
 */

import { parse } from "https://deno.land/std/flags/mod.ts";
import { join, dirname } from "https://deno.land/std@0.66.0/path/mod.ts";
import { opine, serveStatic } from "https://deno.land/x/opine@0.21.3/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs@0.8.0/mod.ts";
// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/4a50660/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server";
import { App } from "./components/App.tsx";

/**
 * Create our client bundle - you could split this out into
 * a preprocessing step.
 */
const [diagnostics, js] = await Deno.bundle(
  "./client.tsx",
  undefined,
  { lib: ["dom", "dom.iterable", "esnext"] },
);

if (diagnostics) {
  console.log(diagnostics);
}

/**
 * Create our Opine server.
 */
const app = opine();
const DEFAULT_PORT = 8080;
const {args} = Deno;
const argPort = parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

// STATIC FILE SERVING MUST GO FIRST 
const __dirname = dirname(import.meta.url);
const servedDir = join(__dirname, "public");
console.log('Serving up files from: ' + servedDir);
app.use(serveStatic(servedDir));

// Engine
app.engine(".html", renderFileToString);
app.set("views", join(__dirname, "views"));
app.set("view engine", "html");

/**
 * Serve our client JS bundle.
 */
app.get("/scripts/client.js", async (req, res) => {
  res.type("application/javascript").send(js);
});

/**
 * Main route setup
 */
app.get("/", (req, res) => {
  const app = <App isServer={true} />;
  const content = (ReactDOMServer as any).renderToString(app);
  const scripts = `<script type="module" src="/scripts/client.js"></script>`;

  res.set("cache-control", "no-store").render("main", {
    content,
    scripts,
    title: "Our Story",
  });
});

app.listen(port);
console.log(`Opine started on port ${port}`);
