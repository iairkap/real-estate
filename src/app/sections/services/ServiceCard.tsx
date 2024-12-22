import React from 'react';
import Section from '@/app/components/sections/section';
import styles from "@/app/sections/services/ServiceCard.module.scss";
import Card from "@/app/sections/services/Card"
import { gridPropertyValue } from '@/app/constants/constants';
import Image from 'next/image';
//eslint-disable-next-line
interface ServiceCardProps {
    title: string
    description: string

}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {

    console.log(title)

    return (
        <Section title={title} description={description}>
            <div className={styles.cardsContainer}>
                {title === "Unlock Property Value" ? (
                    gridPropertyValue
                        .filter((card) => card.id <= 4)
                        .map((card) => (
                            <Card key={card.id} icon={card.icon} title={card.title} span={card.span} />
                        ))
                ) : (
                    gridPropertyValue
                        .filter((card) => card.id > 4)
                        .map((card) => (
                            <Card key={card.id} icon={card.icon} title={card.title} span={card.span} />
                        ))
                )

                }
                <div className={styles.card}>
                    <div className={styles.backgroundContainer}>
                        <Image src={"/icons/background.svg"} alt="background" layout='fill' objectFit='cover' />
                    </div>
                    <span className={styles.spanStronger}>
                        Unlock the Value of Your Property Today
                    </span>
                    <span className={styles.span}>
                        Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.
                    </span>
                </div>
            </div>
        </Section>
    );
}

export default ServiceCard;