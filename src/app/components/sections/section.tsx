import React from 'react';
import styles from "@/app/styles/components/sections.module.scss"
import { STAR } from '@/lib/image';
import { Button } from '@/components/ui/button';

interface SectionProps {
    children: React.ReactNode;
    title: string;
    description: string;
    button?: string
}


/*     <svg
              width="18"
              height="18"
              className={styles.icon}
              onClick={handleClickBack}
            >
              <use href={CHEVRON_RIGHT}></use>
            </svg>
             */

const Section: React.FC<SectionProps> = ({ children, title, description, button }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.icon}>
                <img src={STAR} alt="star" />
                <img src={STAR} alt="star" className={styles.opacity} />
                <img src={STAR} alt="star" className={styles.opacityb} />
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>{title}</h2>
                    <p className={styles.span}>{description}</p>
                </div>
                {
                    button &&
                    <div>
                        <Button variant='secondary'>{button}</Button>
                    </div>
                }
            </div>
            {children}
        </div>
    )
}

export default Section;