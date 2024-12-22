import React from 'react';
import styles from "@/app/styles/components/property/Header.module.scss";
import type { Property } from '@/app/store/useFiltersStore';
import { LOCATION } from '@/lib/image';
import { formatMoney } from '@/lib/utils';


interface HeaderProps {
    filteredProperties: Property[];
}

const Header: React.FC<HeaderProps> = ({ filteredProperties }) => {

    console.log("filteredProperties", filteredProperties);

    return (
        <section className={styles.header}>
            <div className={styles.left}>
                <h3 className={styles.h3}>
                    {filteredProperties[0].name}
                </h3>
                <span className={styles.location}>
                    <svg width="24" height="24" className={styles.icon}>
                        <use href={LOCATION}></use>
                    </svg>
                    {filteredProperties[0].location}
                </span>
            </div>
            <div className={styles.price}>
                <span className={styles.span}>Price</span>
                <h2 className={styles.spanStrong}>
                    {formatMoney(filteredProperties[0].price)}
                </h2>
            </div>
        </section>
    );
}

export default Header;