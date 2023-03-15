import {createStore,applyMiddleware} from 'redux'
import Reducer from './Reducer';
const store =createStore(Reducer,applyMiddleware())

export default store;