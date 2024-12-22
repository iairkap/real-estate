import React from 'react';
import type { Property } from '@/app/store/useFiltersStore';
import styles from "@/app/styles/components/property/Description.module.scss";
import { BEDROOMB, BATHROOMB, AREA } from '@/lib/image';

interface DerscriptionProps {
    filteredProperties: Property[]
}


const Derscription: React.FC<DerscriptionProps> = ({ filteredProperties }) => {
    console.log(filteredProperties)


    const descriptionUtil = [
        { title: "Bedrooms", icon: BEDROOMB, value: filteredProperties[0].bedrooms },
        { title: "Bathrooms", icon: BATHROOMB, value: filteredProperties[0].bathrooms },
        { title: "Area", icon: AREA, value: `${filteredProperties[0].area} Square Feet` },
    ]



    return (
        <section className={styles.layout}>
            <article className={styles.description}>
                <div className={styles.titleContainer}>
                    <h3>Description</h3>
                    <span>{filteredProperties[0].description}</span>
                </div>
                <div className={styles.descriptionContainer}>
                    {descriptionUtil.map((card) => {
                        return (
                            <div key={card.title} className={styles.cardContainer}>
                                <div className={styles.iconHeader}>
                                    <svg width="30" height="20" className={styles.icon}>
                                        <use href={card.icon}></use>
                                    </svg>
                                    <span>{card.title}</span>
                                </div>
                                <div>
                                    <h3 className={styles.value}>{card.value}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </article>
            <article className={styles.keyFeatures}>
                <div className={styles.titleContainer}>
                    <h3>Key Features and Amenities</h3>
                    {
                        filteredProperties[0].key_features.map((key, index) => {
                            return (
                                <div key={index} className={styles.key}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6152 2.09492C14.9165 2.26286 15.0643 2.6146 14.9736 2.94733L12.982 10.25H20.25C20.5487 10.25 20.8189 10.4272 20.9379 10.7011C21.0569 10.975 21.0021 11.2934 20.7983 11.5117L10.2983 22.7617C10.063 23.0139 9.68604 23.073 9.38481 22.9051C9.08357 22.7371 8.9357 22.3854 9.02644 22.0527L11.0181 14.75H3.75002C3.45137 14.75 3.18118 14.5728 3.06216 14.2989C2.94313 14.025 2.99795 13.7066 3.20173 13.4883L13.7017 2.23826C13.937 1.98612 14.314 1.92698 14.6152 2.09492Z" fill="white" />
                                    </svg>
                                    <span>
                                        {key}
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    );
}

export default Derscription;