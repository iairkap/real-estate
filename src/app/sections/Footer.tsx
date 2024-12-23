import React from 'react';
import styles from "@/app/styles/components/Footer.module.scss";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
//eslint-disable-next-line
interface FooterProps {
    // Define props here
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.backgroundContainer}>
                <Image src={"/icons/backgroundB.svg"} alt="background" layout='fill' objectFit='cover' />
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>Start Your Real Estate Journey Today</h2>
                    <p className={styles.span}>Your dream property is just a click away. Whether you&apos;re looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>

                <div className={styles.buttonContainer} >
                    <Button >Explore Properties</Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;