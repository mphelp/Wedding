import {
  opine,
  serveStatic,
  React,
  ReactDOMServer,
  Vert,
  dirname,
  join,
  parse
} from "./deps.ts";

import App from "./app.tsx";

// SETUP
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

const browserBundlePath = "/browser.js";

const js =
  `// React
   import React from "https://dev.jspm.io/react@16.13.1";
   import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
   // Vert
   import { default as Vert } from "https://dev.jspm.io/react-vertical-timeline-component@2.6.2";
   const { VerticalTimeline, VerticalTimelineElement } = Vert;

   // Icons
   //import { default as Icons } from "https://dev.jspm.io/@material-ui/icons";
   //const HomeWork = Icons.HomeWork;

   const App = ${App};
   ReactDOM.hydrate(React.createElement(App), document.body);`;

const html =
  `<html><head>
  <script type="module" src="${browserBundlePath}"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.6.0/prop-types.min.js"></script>
  <link rel="stylesheet" href="https://dev.jspm.io/npm:react-vertical-timeline-component@3.0.2/style.min.css">
  <link rel="stylesheet" href="/css/base.css">
  <style>* { font-family: Helvetica; }</style></head><body>${
    (ReactDOMServer as any).renderToString(<App />)
  }</body></html>`;

app.use(browserBundlePath, (req, res, next) => {
  res.type("application/javascript").send(js);
});

app.use("/", (req, res, next) => {
  res.type("text/html").send(html);
});

//app.use(serveStatic('static'))

app.listen({ port });
      
console.log(`React SSR App listening on port ${port}`);
console.log(`${App}`)
//console.log(`React: ${Object.getOwnPropertyNames(Vert.VerticalTimelineElement)}`)
//console.log(`React: ${Object.getOwnPropertyNames(Vert.VerticalTimeline)}`)
//console.log(`Icons: ${Object.getOwnPropertyNames(Icons)}`)