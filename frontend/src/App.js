
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

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

          </Routes>
          {/* <HomeScreen /> */}
        </Container>

      </main>

      <Footer />

    </Router>
  );
}

export default App;
