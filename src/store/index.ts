import { legacy_createStore as createStore, applyMiddleware,combineReducers } from 'redux'
import loginReducer from './Login/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// composeWithDevTools 配合 redux-devtools使用
const allReducers = combineReducers({
  loginReducer
})

export default createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))
