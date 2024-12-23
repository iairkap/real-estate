"use client"
import React from 'react';
import styles from "@/app/styles/components/sections.module.scss"
import { STAR } from '@/lib/image';
import { Button } from '@/components/ui/button';
import useAOS from '@/app/hooks/useAOS';
import Image from 'next/image';

interface SectionProps {
    children: React.ReactNode;
    title: string;
    description: string;
    button?: string
}




const Section: React.FC<SectionProps> = ({ children, title, description, button }) => {
    useAOS();

    return (
        <div className={styles.layout} data-aos="fade-up">
            <div className={styles.icon}>
                <Image src={STAR} alt="star" width={30} height={30} />
                <Image src={STAR} alt="star" className={styles.opacity} width={30} height={30} />
                <Image src={STAR} alt="star" className={styles.opacityb} width={30} height={30} />
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>{title}</h2>
                    <p className={styles.span}>{description}</p>
                </div>
                {
                    button &&
                    <div className={styles.buttonContainer}>
                        <Button variant='secondary'>{button}</Button>
                    </div>
                }
            </div>
            {children}
        </div>
    )
}

export default Section;