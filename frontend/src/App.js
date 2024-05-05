
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

          </Routes>
          {/* <HomeScreen /> */}
        </Container>

      </main>

      <Footer />

    </Router>
  );
}

export default App;
