import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer from './reducers'
import DevTools from './DevTools'

export default function configureStore(initialState) {
    const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  )

    if (module.hot) {
        /* eslint-disable global-require */
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default
            store.replaceReducer(nextRootReducer)
        })
        /* eslint-enable global-require */
    }

    return store
}
