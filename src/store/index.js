import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/index';
import thunk from 'redux-thunk';

// console.log('reducer', reducer);
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
export default store;