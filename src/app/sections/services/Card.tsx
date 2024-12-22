import React from 'react';
import styles from "@/app/sections/services/ServiceCard.module.scss";
interface CardProps {
    icon?: string;
    title: string;
    span: string;
}

const Card: React.FC<CardProps> = ({ icon, title, span, }) => {
    return (
        <section className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconContainerSVG}>
                    <svg
                        width="18"
                        height="18"
                        className={styles.icon}
                    >
                        <use href={icon}></use>
                    </svg>
                </div>
                <h2 className={styles.spanStrong}>{title}</h2>
            </div>
            <div>
                <span className={styles.span}>{span}</span>
            </div>

        </section>
    );
}

export default Card;