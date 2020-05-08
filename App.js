import {html, render} from 'https://unpkg.com/htm/preact/standalone.module.js'

function App() {
  return html`
    <div>
      Hello world
    </div>
  `
}

render(html`<${App} />`, document.getElementById('app'))