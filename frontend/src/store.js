import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductListReducer, ProductDetailsReducer, ProductReviewCreateReducer } from './reducers/ProductReducers';
import { CartReducer } from './reducers/CartReducers';
import { userLoginReducer, userRegisterReducer, userProfileReducer, userUpdateProfileReducer } from './reducers/UserReducer';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/OrderReducers';

const reducer = combineReducers({

    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    productReviewCreate: ProductReviewCreateReducer,
    cart: CartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {};


const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
    userLogin: { userInfo: userInfoFromStorage }

};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;