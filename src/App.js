import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import NintendoAccount from './components/NintendoAccount';
import SignupHeader from './components/SignupHeader';
import SignupFooter from './components/SignupFooter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            } />
          <Route exact path='/nintendo-account'
            element={
              <>
                <SignupHeader />
                <NintendoAccount />
                <SignupFooter />
              </>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
