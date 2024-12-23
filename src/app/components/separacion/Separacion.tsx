import React from 'react';
import styles from "@/app/styles/components/Separacion.module.scss"
import { SMART, EFORTLESS, VALUE, DREAM, PHONE, EMAIL, HEADQUARTES, SOCIALMEDIA } from '@/lib/image';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SeparacionProps {
    contactForm?: boolean

}

const Separacion: React.FC<SeparacionProps> = ({ contactForm = false }) => {


    const cardSeparacion = [
        {
            icon: SMART,
            description: "Find Your Dream Home"
        },
        {
            icon: EFORTLESS,
            description: "Effortless Property Management"
        },
        {
            icon: VALUE,
            description: "Unlock Property Value"
        },
        {
            icon: DREAM,
            description: "Smart Investments, Informed Decisions"
        }
    ]

    const cardSeparacionContactForm = [
        {
            icon: EMAIL,
            description: "email@example.com",
            onClick: () => {
                window.location.href = "mailto:email@example.com"
            }
        },
        {
            icon: PHONE,
            description: "+123456789",
            onClick: () => {
                window.location.href = "tel:+123456789"
            }
        },
        {
            icon: HEADQUARTES,
            description: "Main Headquartes",
            onClick: () => {
                window.location.href = "https://www.google.com/maps"
            }
        },
        {
            icon: SOCIALMEDIA,
            description: "Social Media",
            onClick: () => {
                window.location.href = "https://www.google.com/maps"
            }
        }

    ]

    return (
        <div className={styles.main}>
            <div className={styles.layout}>
                {!contactForm &&
                    cardSeparacion.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <img src={item.icon} alt="icon" />
                            <span>{item.description}</span>
                        </div>
                    ))}
                {contactForm &&
                    cardSeparacionContactForm.map((item, index) => (
                        <div className={styles.card} key={index} onClick={item.onClick}>
                            <div className={styles.arrowPointng}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <path d="M6.375 27.625L27.625 6.375M27.625 6.375L11.6875 6.375M27.625 6.375V22.3125" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className={styles.iconContainer}>
                                <svg className={styles.icon} width={32} height={32}>
                                    <use href={item.icon}></use>
                                </svg>
                            </div>
                            <span>{item.description}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Separacion;