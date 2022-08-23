import React from 'react';
import './PhotoCard.css';

function PhotoCard({ movie }) {

  return (
    <section className='photo-card'>
      <div className='photo-card__container'>
        <img className='photo-card__photo' src={ `https://api.nomoreparties.co${movie.image.url}`} alt={`${movie.nameRU}`} />
         <h3 className='photo-card__name'> {movie.nameRU} </h3>
        {/*<p className='photo-card__discription'> {movie.discription} </p> */}
      </div>
    </section>
   );
}

export default PhotoCard;
