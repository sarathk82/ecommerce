
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import EditProductScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';


import Header from './component/Header';
import Footer from './component/Footer';


function App() {
  return (

    <Router>

      <Header />

      <main className='py-3'>

        <Container>
          <Routes>

            <Route exact path='/' element={<HomeScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/cart/' element={<CartScreen />} />
            <Route path='/payment/' element={<PaymentScreen />} />
            <Route path='/profile/' element={<ProfileScreen />} />
            <Route path='/placeorder/' element={<PlaceOrderScreen />} />
            <Route path='/shipping/' element={<ShippingScreen />} />
            <Route path='/orders/:id' element={<OrderScreen />} />
            <Route path='/admin/users/' element={<UserListScreen />} />
            <Route path='/admin/user/:id' element={<UserEditScreen />} />
            <Route path='/admin/products/' element={<ProductListScreen />} />
            <Route path='/admin/product/:id/edit' element={<EditProductScreen />} />
            <Route path='/admin/orders/' element={<OrderListScreen />} />


          </Routes>
          {/* <HomeScreen /> */}
        </Container>

      </main>

      <Footer />

    </Router>
  );
}

export default App;
