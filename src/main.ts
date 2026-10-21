import "./style.css";
// The board logic is a classic (global-scope) script because the toolbar
// buttons use inline onclick="..." handlers. We load it as raw text and run it
// in the global scope so those handlers keep working after bundling.
import appSource from "./app.js?raw";

const script = document.createElement("script");
script.textContent = appSource;
document.body.appendChild(script);
