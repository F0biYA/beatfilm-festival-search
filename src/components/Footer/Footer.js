import './Footer.css';
import React from 'react';
//import { Switch, Link, Route } from 'react-router-dom';      записать библиотеку

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__container">
      <p className="footer__copyright">© 2022</p>
        <ul className="footer__links">
          <li className="hover"><a target="_blank" href="https://beatfilmfestival.ru/" className="footer__link" rel="noreferrer">BEAT FILM</a></li>
          <li className="hover"><a target="_blank" href="https://github.com/F0biya" className="footer__link" rel="noreferrer">Github</a></li>
          <li className="hover"><a target="_blank" href="https://github.com/F0biya" className="footer__link" rel="noreferrer">Alexandr Putilin</a></li>
        </ul>

      </div>
    </footer>

  )
};

export default Footer;
