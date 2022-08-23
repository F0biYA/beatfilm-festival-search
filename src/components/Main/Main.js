import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutProject from '../AboutProject/AboutProject';
import './Main.css';
import { Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import PromoExplorer from '../Promo/PromoExpoler/PromoExplorer';
import Gallery from '../Gallery/Gallery';

function Main({loggedIn, movie}) {

  return (
    <>
      <Header
        children={ !loggedIn ?
          <>
            <Link to="/signup" className="header__link hover">Регистрация</Link>
            <Link to="/signin" className="header__link header__button-link hover">Войти</Link>
          </>
          : <NavigationBar/>}
      />
      <PromoExplorer/>
      <Gallery movie={movie} />
      <AboutProject />
      <Footer />
    </>
  );
}
export default Main;
