import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './Routes'

import 'babel-polyfill'
import 'bootstrap-loader'
import 'velocity-animate'
import 'velocity-animate/velocity.ui'

const rootEl = document.getElementById('root')
ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  rootEl
)

if (module.hot) {
    module.hot.accept('./Routes', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./Routes').default
        ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    )
    })
}
