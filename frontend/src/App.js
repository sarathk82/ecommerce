
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import Header from './component/header';
import Footer from './component/footer';


function App() {
  return (

    <Router>

      <Header />

      <main className='py-3'>

        <Container>
          <Routes>

            <Route exact path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/cart/' element={<CartScreen />} />

          </Routes>
          {/* <HomeScreen /> */}
        </Container>

      </main>

      <Footer />

    </Router>
  );
}

export default App;
