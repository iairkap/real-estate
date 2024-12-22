import React from 'react';
import styles from '@/app/styles/components/OurValues.module.scss';

//eslint-disable-next-line
interface OurValuesCardProps {
    title: string;
    description: string;
    useIcon: string;
}

const OurValuesCard: React.FC<OurValuesCardProps> = ({
    title, description, useIcon
}) => {
    return (
        <article className={styles.card}>
            <div className={styles.header}>
                <div className={styles.iconContainerSVG}>
                    <svg
                        width="18"
                        height="18"
                        className={styles.icona}
                    >
                        <use href={useIcon}></use>
                    </svg>
                </div>
                <h2 className={styles.spanStrong}>{title}</h2>
            </div>
            <p>{description}</p>
        </article >
    );
}

export default OurValuesCard;