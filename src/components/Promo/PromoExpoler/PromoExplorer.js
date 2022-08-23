import React from "react";
import { Link } from "react-router-dom";
import './PromoExplorer.css';

function PromoExplorer() {
   return (
<section className="promo">
    <h1 className="promo__title">Портал поиска документальных фильмов </h1>
    <div className="promo__nav">
      <a href="#о_проекте" className="promo__nav__element hover">О портале</a>
      <Link to="/signin" className="promo__nav__element hover">Вперед к фильмам!</Link>
    </div>
</section>
   )
}

export default PromoExplorer;
