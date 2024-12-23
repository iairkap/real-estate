import React from 'react';
import styles from "@/app/styles/components/OurTeam.module.scss";
import { STAR, MESSAGE } from "@/lib/image";
import useAOS from '@/app/hooks/useAOS';




const OurTeam: React.FC = () => {

    useAOS();
    const team = [
        {
            id: 1,
            name: "Max Mitchell",
            role: "Founder & CEO",
            picture: "/images/boss.png"
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "Chief Real Estate Officer",
            picture: "/images/crso.png"
        },
        {
            id: 3,
            name: "David Brown",
            role: "Head of Property Management",
            picture: "/images/head.png"
        },
        {
            id: 4,
            name: "Michael Turner",
            role: "Legal Counsel",
            picture: "/images/Legal.png"
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
                <h3 className={styles.h3}>Navigating the Estatein Experience</h3>
                <span className={styles.text}>At Estatein, we have designed a straightforward process to help you find and purchase your dream property with ease. Here is a step-by-step guide to how it all works.</span>
            </div>
            <div className={styles.cardsContainer}>

                {
                    team.map((item) => {
                        return (
                            <div className={styles.card} key={item.id} data-aos="fade-out-right" data-aos-delay={item.id * 100}>
                                <img src={item.picture} alt="picture" />
                                <div className={styles.infoContainer}>
                                    <h4 className={styles.name}>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                                <div className={styles.sendMessage}>
                                    Say Hello 👋
                                    <div className={styles.circlePurple}>
                                        <svg className={styles.iconWhite}>
                                            <use xlinkHref={MESSAGE}></use>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </article>);
}

export default OurTeam;