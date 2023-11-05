import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductListReducer, ProductDetailsReducer } from './reducers/ProductReducers';
import { CartReducer } from './reducers/CartReducers';



const reducer = combineReducers({

    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    cart: CartReducer
});

const initialState = {};
const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;