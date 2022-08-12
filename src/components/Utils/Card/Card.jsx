import React from 'react';

import styles from './Card.module.css'

const Card = ({title, image, description, ctaText, url}) => {

    return (
        <div className={styles.card}>
            <a href={url}><img src={image} alt="my image"/></a>
            <div className={styles.card__details}>
                <div className={styles.card__title}>{title}</div>
                <div className={styles.card__description}>{ description }</div>
                <div className={styles.card__info}>
                    <a href={url}>{ctaText}</a>
                </div>
            </div>
        </div>
    )

}

export default Card;