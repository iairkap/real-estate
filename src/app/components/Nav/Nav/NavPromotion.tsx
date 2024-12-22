import React from 'react';
import styles from "@/app/styles/components/Nav/Nav.module.scss"
import Image from 'next/image';


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface NavPromotionProps {

}

const NavPromotion: React.FC<NavPromotionProps> = () => {
    return (
        <main className={styles.promotion}>
            <div className={styles.promotionContainer}>
                <div className={styles.background}>
                    <Image src="/background.png" alt="Estatein Promotion" layout="fill" objectFit="cover" />
                </div>
            </div>
            <span className={styles.promotionText}>
                ✨Discover Your Dream Property with Estatein
            </span>
            <span className={styles.underline}>
                Learn More
            </span>
        </main>
    );
}

export default NavPromotion;