import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import cartReducer from './CartReducer';

const mainReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default mainReducer;
