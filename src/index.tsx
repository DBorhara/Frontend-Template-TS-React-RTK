import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

/**
 * Select the root div where the React app will be attached.
 */
const rootElement = document.getElementById('root') as HTMLElement

/**
 * Create a root using ReactDOM.createRoot() for Concurrent Mode rendering.
 * Concurrent Mode is a set of new features that help React apps stay responsive
 * and gracefully adjust to the user’s device capabilities and network speed.
 * As of September 2021, Concurrent Mode is experimental and not yet fully stable.
 */
const root = ReactDOM.createRoot(rootElement)

/**
 * Render the application.
 *
 * Wrap the application in <React.StrictMode> for highlighting potential problems in an application.
 * Wrap the application in <Router> to enable React Router in the app.
 * Wrap the application in <Provider> and pass the Redux store to make it available to all component.
 */
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
