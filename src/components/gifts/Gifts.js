import React from 'react';
import styles from './Gifts.module.css';

export const Gifts = ({ gifts, onGiftClick }) => {
  return (
    <div className={styles.container} id="gifts">
        <h2 className={styles.title}>Lista de presentes</h2>
        <h4 className={styles.description}>Caso deseje nos presentear</h4>
        <div className={styles.content}>
            {gifts.slice().map((gift, index) => (
                <div key={index} onClick={() => onGiftClick(gift)}>
                    <img src={require(`../../assets/gifts/cards/${gift.cardPicture}`)} 
                        alt={gift.cardPicture}
                        className={styles.cardPicture}
                    />
                    <p className={styles.giftCard}>{gift.name}</p>
                    <p className={styles.value}>{gift.cardDescription}</p>
                    
                </div>
            ))}
        </div>
    </div>
  );
}