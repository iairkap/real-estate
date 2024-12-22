import React from 'react';
import styles from "@/app/styles/components/OurExperience.module.scss";
import { STAR } from "@/lib/image";

//eslint-disable-next-line
interface OurExperienceProps {
    // Define props here
}

const OurExperience: React.FC<OurExperienceProps> = () => {


    const steps = [
        {
            id: 1,
            title: "Discover a World of Possibilities",
            description: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget."
        },
        {
            id: 2,
            title: "Narrowing Down Your Choices",
            description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
        },
        {
            id: 3,
            title: "Personalized Guidance",
            description: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
        },
        {
            id: 4,
            title: "See it for Yourself",
            description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
        },
        {
            id: 5,
            title: "Making Informed Decisions",
            description: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."
        },
        {
            id: 6,
            title: "Getting the Best Deal",
            description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."

        }
    ]

    return (
        <article className={styles.layout}>
            <div>
                <div className={styles.icon}>
                    <img src={STAR} alt="star" />
                    <img src={STAR} alt="star" className={styles.opacity} />
                    <img src={STAR} alt="star" className={styles.opacityb} />
                </div>
                <h3 className={styles.h3}>Navigating the Estatein Experience</h3>
                <span className={styles.text}>At Estatein, we have designed a straightforward process to help you find and purchase your dream property with ease. Here is a step-by-step guide to how it all works.</span>
            </div>
            <div className={styles.cardsContainer}>
                {steps.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <div className={styles.step}>
                            <span>Step {card.id}</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.h3}>{card.title}</h3>
                            <p className={styles.text}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </article>);
}

export default OurExperience;