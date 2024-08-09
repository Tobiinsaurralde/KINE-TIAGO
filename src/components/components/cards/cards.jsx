import React from 'react';
import style from './cards.module.css';

const Cards = ({ title, text, image }) => {
  return (
    <div className={style.card}>
      <img src={image} alt="card-image" className={style.cardImage} />
      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>HOLA</h3>
        <p className={style.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default Cards;
