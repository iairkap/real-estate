"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ImageCarousel from "@/app/components/carrousel/Carrousel";
import { usePropertyDetails } from "@/app/hooks/usePropertyDetail";
import Loader from "@/app/components/Loader";
import styles from "@/app/styles/components/property/Layout.module.scss";
import Header from "@/app/sections/property/Header";
import Derscription from "@/app/sections/properties/Description";
import FAQContainer from "@/app/sections/Faq";
import Inquieres from "@/app/sections/properties/Inquires";
import PricingDetails from "@/app/sections/properties/PricingDetails";


const PropertiesID: React.FC = () => {
    const pathName = usePathname();
    const id = pathName.split("/").pop();
    const { filteredProperties, pictures, loading } = usePropertyDetails(id);

    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        <main className={styles.layout}>
            {filteredProperties.length > 0 &&
                <div>
                    <Header filteredProperties={filteredProperties} />
                    <article className={styles.carrouselContainer}>
                        <ImageCarousel images={pictures} />
                    </article>
                    <Derscription filteredProperties={filteredProperties} />
                    <Inquieres name={filteredProperties[0].name} />
                    <div className={styles.faqContainer}>

                        <PricingDetails property={filteredProperties[0]} />
                    </div>
                </div>
            }
            <div className={styles.faqContainer}>
                <FAQContainer />
            </div>
        </main>
    );
};

export default PropertiesID;