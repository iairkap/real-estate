import React from 'react';
import styles from "@/app/styles/components/cardsNav/Card.module.scss"
interface CardsHeroProps {
    title: string,
    description: string
}

const CardsHero: React.FC<CardsHeroProps> = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <p>{title}</p>
            <h2>{description}</h2>
        </div>
    );
}

export default CardsHero;