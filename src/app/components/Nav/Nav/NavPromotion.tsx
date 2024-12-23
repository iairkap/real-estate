"use client"
import React, { useState } from "react";
import styles from "@/app/styles/components/Nav/Nav.module.scss";
import Image from "next/image";
import Link from "next/link";




const NavPromotion: React.FC = () => {
    const [isClosed, setIsClosed] = useState(false);



    if (isClosed) return null;

    console.log("isClosed", isClosed);

    return (
        <main className={styles.promotion}>

            <div className={styles.promotionContainer}>
                {/* Asegúrate de que este contenedor tenga `position: relative` */}
                <Image
                    src="/icons/background.svg"
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div>
                <span className={styles.promotionText}>
                    ✨ Discover Your Dream Property with Estatein{" "}
                    <Link href="/services">
                        <span className={styles.underline}>{`Learn More`}</span>
                    </Link>
                </span>
            </div>
            <button
                onClick={() => { setIsClosed(true) }}
                className={styles.closeButton}
                aria-label="Close promotion"
            >
                ✕
            </button>

        </main>
    );
};

export default NavPromotion;