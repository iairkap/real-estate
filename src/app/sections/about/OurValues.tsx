"use client";

import React from 'react';
import { TRUST, EXCELLNCE, CLIENTCENTRIC } from '@/lib/image';
import styles from '@/app/styles/components/OurValues.module.scss';
import OurValuesCard from '@/app/components/OurValuesCard/OurValuesCard';
import { STAR } from '@/lib/image';
import useAOS from '@/app/hooks/useAOS';



//eslint-disable-next-line
interface OurValuesProps {
    // Define props here
}





const OurValues: React.FC<OurValuesProps> = () => {
    useAOS();

    const ourValues = [
        { id: 1, title: "Trust", description: "Trust is the cornerstone of every successful real estate transaction.", useIcon: TRUST },
        { id: 2, title: "Excellence", description: "We set the bar high for ourselves. From the properties we list to the services we provide.", useIcon: EXCELLNCE },
        { id: 3, title: "Client-Centric", description: "Your dreams and needs are at the center of our universe. We listen, understand.", useIcon: CLIENTCENTRIC },
        { id: 4, title: "Our Commitment", description: "We are dedicated to providing you with the highest level of service, professionalism, and support.", useIcon: TRUST },


    ]


    return (
        <section className={styles.contentLayout} data-aos="fade-up">
            <article className={styles.left}>
                <div className={styles.icon}>
                    <img src={STAR} alt="star" />
                    <img src={STAR} alt="star" className={styles.opacity} />
                    <img src={STAR} alt="star" className={styles.opacityb} />
                </div>
                <h3 className={styles.h3}>Our Values</h3>
                <span className={styles.text}>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</span>
            </article>
            <article className={styles.cardsContainer}>
                {ourValues.map((card) => {
                    return <div key={card.id} data-aos="fade-in-right" data-aos-delay={card.id * 100} data-aos-easing="ease-in-out">
                        <OurValuesCard key={card.id} title={card.title} description={card.description} useIcon={card.useIcon} />
                    </div>
                })}
            </article>
        </section>
    );
}

export default OurValues;