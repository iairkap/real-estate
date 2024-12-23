import React from 'react';
import styles from '@/app/styles/components/OurAchivements.module.scss';
import { STAR } from '@/lib/image';
import useAOS from '@/app/hooks/useAOS';
//eslint-disable-next-line
interface OurAchivementsProps {
    // Define props here
}

const OurAchivements: React.FC<OurAchivementsProps> = () => {

    useAOS();

    const ourAchivementes = [
        {
            id: 1,
            title: "3+ Years of Excellence",
            description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."
        },
        {
            id: 2,
            title: "Happy Customers",
            description: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
        },
        {
            id: 3,
            title: "Industry Recognition",
            description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
        }


    ]

    return (
        <article className={styles.layout} data-aos="fade-up">
            <div>
                <div className={styles.icon}>
                    <img src={STAR} alt="star" />
                    <img src={STAR} alt="star" className={styles.opacity} />
                    <img src={STAR} alt="star" className={styles.opacityb} />
                </div>
                <h3 className={styles.h3}>Our Achivements</h3>
                <span className={styles.text}>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</span>
            </div>
            <div className={styles.cardsContainer}>
                {ourAchivementes.map((card) => {
                    return (
                        <article key={card.id} className={styles.card} data-aos="fade-up">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </article>

                    )
                }
                )}

            </div>
        </article>
    );
}

export default OurAchivements;