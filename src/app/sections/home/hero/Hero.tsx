import React from 'react';
import styles from "@/app/styles/components/Hero.module.scss";
import { Button } from '@/components/ui/button';
import CardsHero from '@/app/components/cardsNav/CardsHero';

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
        <main className={styles.layout}>
            <article className={styles.content}>
                <div className={styles.textContainer}>
                    <h1 className={styles.h1}>Discover Your Dream Property with Estatein</h1>
                    <span>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</span>
                </div>
                <div className={styles.buttonContainer}>
                    <Button variant='secondary'>Learn More</Button>
                    <Button variant='default'>Browse Properties</Button>
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
            <div className={styles.picture}>
                {/*                 <Image src="/HERO.png" alt="hero" layout="fill" objectFit="cover" />
 */}            </div>
        </main>
    );
}

export default Hero;