import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from './reducer.ts'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// composeWithDevTools 配合 redux-devtools使用

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
