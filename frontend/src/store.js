import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductListReducer, ProductDetailsReducer } from './reducers/ProductReducers';
import { CartReducer } from './reducers/CartReducers';
import { userLoginReducer } from './reducers/UserReducer';


const reducer = combineReducers({

    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    cart: CartReducer,
    userLogin: userLoginReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;