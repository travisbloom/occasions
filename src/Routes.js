import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {Provider} from 'react-redux'

import App from './pages/App/App'
import LoginForm from './pages/LoginForm/LoginForm'
import OnboardingForm from './pages/OnboardingForm/OnboardingForm'

import configureStore from './configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="login" component={LoginForm} />
            <Route path="start" component={OnboardingForm} />
            </Route>
        </Router>
    </Provider>
)
