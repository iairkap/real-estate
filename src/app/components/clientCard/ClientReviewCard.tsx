import React from "react";
import { REVIEW } from "@/lib/image";
import styles from "@/app/styles/components/clientCard/ClientReviewCard.module.scss";
import { faker } from '@faker-js/faker';
import Image from "next/image";
interface ClientReviewCardProps {
    name: string;
    title: string;
    description: string;
    location: string;
    rating: number;
    avatar: string;
}

const ClientReviewCard: React.FC<ClientReviewCardProps> = ({
    name,
    title,
    description,
    location,
    rating,
}) => {
    // Crear un array para renderizar las estrellas según el rating
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={i}

                    className={`${styles.icon} ${i < rating ? styles.activeStar : ""}`}
                >
                    <use xlinkHref={REVIEW}></use>
                </svg>
            );
        }
        return stars;
    };

    return (
        <section className={styles.card}>


            <div className={styles.headerRating}>{renderStars()}</div>
            <div className={styles.content}>
                <span className={styles.title}>{title}</span>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.footer}>
                <div className={styles.pictureContainer}>
                    <Image src={faker.image.avatar()} alt="" layout="fill" />
                </div>
                <div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.location}>{location}</p>
                </div>
            </div>
        </section>
    );
};

export default ClientReviewCard;