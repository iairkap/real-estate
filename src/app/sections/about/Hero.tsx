import React from 'react';
import styles from "@/app/styles/components/Hero.module.scss";
import CardsHero from '@/app/components/cardsNav/CardsHero';
import Image from 'next/image';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeroProps {
    // Define props here
}


const Hero: React.FC<HeroProps> = () => {

    const cardInformation = [
        {
            title: "Happy Costumers",
            description: "200+",
        },
        {
            title: "Properties for Clients",
            description: "10K+"
        },
        {
            title: "Years of Experience",
            description: "16+"
        }
    ]


    return (
        <main className={styles.layoutb}>
            <article className={styles.content}>
                <div className={styles.textContainer}>
                    <h1 className={styles.h1}>Our Journey</h1>
                    <span>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we&apos;ve expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</span>
                </div>

                <div className={styles.cardsContainer}>
                    {cardInformation.map((card, index) => {
                        return (
                            <div key={index} className={styles.child}>
                                <CardsHero title={card.title} description={card.description} />
                            </div>
                        )
                    })}
                </div>
            </article>
            <div className={styles.pictureContainer}>
                <Image src={"/about.png"} alt="about" layout="fill" objectFit="cover" />
            </div>
        </main>
    );
}

export default Hero;