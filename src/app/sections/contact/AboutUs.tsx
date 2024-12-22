import React from 'react';
import styles from "@/app/styles/components/about.module.scss"
import Image from 'next/image';
import A from "@/../public/contact.png"
import B from "@/../public/contactb.png"
import D from "@/../public/contactd.png"
import C from "@/../public/contactc.png"
import E from "@/../public/contacte.png"
import F from "@/../public/contactf.png"
//eslint-disable-next-line
interface AboutUsProps {
    // Define props here
}

const AboutUs: React.FC<AboutUsProps> = () => {

    const gridPicture = [
        { id: 7, image: F, gridColumnSpaces: 2 },
        { id: 5, image: E, gridColumnSpaces: 2 },
        { id: 4, image: D, gridColumnSpaces: 2 },
        { id: 2, image: B, gridColumnSpaces: 1 },
        { id: 3, image: C, gridColumnSpaces: 1 },
        { id: 6, image: null, gridColumnSpaces: 2 },
        { id: 1, image: A, gridColumnSpaces: 2 }
    ];

    return (
        <main className={styles.gridLayout}>
            {gridPicture.map((item) => {
                return (
                    <div key={item.id} className={`${styles.gridItem} ${styles[`gridItem${item.gridColumnSpaces}`]}`}>
                        {item.image ? (
                            <Image src={item.image} alt={`Image ${item.id}`} layout="fill" objectFit="cover" />
                        ) : (
                            <div className={styles.textContainer}>
                                <h1 className={styles.title}>Explore Estatein&apos;s World6</h1>
                                <p className={styles.span}>Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </main>
    );
}

export default AboutUs;