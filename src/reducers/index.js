import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    routing,
    form,
})

export default rootReducer
