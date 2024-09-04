import './assets/css/commonStyle.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import NintendoAccount from './components/NintendoAccount';
import SignupHeader from './components/SignupHeader';
import SignupFooter from './components/SignupFooter';
import SigninPage from './components/SigninPage';
import SingUpOptionPage from './components/SingUpOptionPage';
import SignUpPage from './components/SignUpPage';
import ChildAccountPage from './components/ChildAccountPage';
import CreateChildAccountPage from './components/CreateChildAccountPage';
import NewsandEvents from './components/NewsandEvents';
import NewsandEventsDetail from './components/NewsandEventsDetail';
import GameDetailPage from './components/GameDetailPage';
import MyNintendoStoreGame from './components/MyNintendoStoreGame';
import NintendoGameDetail from './components/NintendoGameDetail';
import MyNintendoStoreHardware from './components/MyNintendoStoreHardware';
import MyNintendoStoreContent from './components/MyNintendoStoreContent';
import ShopAllGames from './components/ShopAllGames';

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
          <Route exact path='/news-and-events'
            element={
              <>
                <Header />
                <NewsandEvents />
                <Footer />
              </>
            } />
          <Route exact path='/news-and-events-details/:slug'
            element={
              <>
                <Header />
                <NewsandEventsDetail />
                <Footer />
              </>
            } />
          <Route exact path='/game-details/:slug'
            element={
              <>
                <Header />
                <GameDetailPage />
                <Footer />
              </>
            } />
          <Route exact path='/my-nintendo-store/:slug1/:slug'
            element={
              <>
                <Header />
                <MyNintendoStoreContent />
                <Footer />
              </>
            } />
          <Route exact path='/nintendo-game-detail/:slug'
            element={
              <>
                <Header />
                <NintendoGameDetail />
                <Footer />
              </>
            } />
          <Route exact path='/shop-all-games'
            element={
              <>
                <Header />
                <ShopAllGames />
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
          <Route exact path='/sign-in'
            element={
              <>
                <SignupHeader />
                <SigninPage />
                <SignupFooter />
              </>
            } />
          <Route exact path='/signup-option'
            element={
              <>
                <SignupHeader />
                <SingUpOptionPage />
                <SignupFooter />
              </>
            } />
          <Route exact path='/sign-up'
            element={
              <>
                <SignupHeader />
                <SignUpPage />
                <SignupFooter />
              </>
            } />
          <Route exact path='/child-account'
            element={
              <>
                <SignupHeader />
                <ChildAccountPage />
                <SignupFooter />
              </>
            } />
          <Route exact path='/create-child-account'
            element={
              <>
                <SignupHeader />
                <CreateChildAccountPage />
                <SignupFooter />
              </>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
