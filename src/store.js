import { createStore,applyMiddleware,combineReducers } from 'redux'
import logger from 'redux-logger'
import NavigationReducer from './reducers/NavigationReducer'

const InitialState = {
    Navigation:{
        Current:"HOME"
    }
}

const Reducers = combineReducers({
    Navigation:NavigationReducer
})

const middleware = applyMiddleware(logger)
const store = createStore(Reducers,InitialState,middleware)



export default store