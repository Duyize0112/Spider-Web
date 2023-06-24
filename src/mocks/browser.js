// src/mocks/browser.js
import { setupWorker } from 'msw'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)

// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'



ReactDOM.render(<App />, document.getElementById('root'))