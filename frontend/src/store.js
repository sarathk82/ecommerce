import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductListReducer, ProductTopRatedReducer, ProductDetailsReducer, ProductReviewCreateReducer, ProductDeleteReducer, ProductCreateReducer, ProductUpdateReducer } from './reducers/ProductReducers';
import { CartReducer } from './reducers/CartReducers';
import { userLoginReducer, userRegisterReducer, userListReducer, userProfileReducer, userUpdateProfileReducer, userDeleteReducer, userUpdateReducer } from './reducers/UserReducer';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer, orderListReducer, orderDeliverReducer } from './reducers/OrderReducers';

const reducer = combineReducers({


    productList: ProductListReducer,
    productTopRated: ProductTopRatedReducer,
    productDetails: ProductDetailsReducer,
    productReviewCreate: ProductReviewCreateReducer,
    productDelete: ProductDeleteReducer,
    productCreate: ProductCreateReducer,
    productUpdate: ProductUpdateReducer,
    cart: CartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer
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