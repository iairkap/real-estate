
"use client"
import React from 'react';
import Section from '../components/sections/section';
import hardcode from "@/app/db/hardcode.json";
import styles from "@/app/styles/components/propertyCards/Property.module.scss";
import PropertyCard from "@/app/components/propertyCard/PropertyCard";
import Pagination from '../components/pagination/Pagination';
import usePagination from "@/app/hooks/usePagination";

//eslint-disable-next-line
interface FeaturedPropertiesProps { }

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = () => {
    const properties_types = hardcode.properties_types;
    const properties = hardcode.properties;
    const { currentPage, totalPages, nextPage, previousPage } = usePagination({
        total: properties.length,
        cardsPerPage: 3,
        setCurrentPage: (page) => {
            console.log(page);
        },
    });

    const propertiesToShow = properties.slice(
        (currentPage - 1) * 3,
        currentPage * 3
    );

    return (
        <Section
            title="Featured Properties"
            description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
            button="View All Properties"
        >
            <div className={styles.cardContainer}>
                {propertiesToShow.map((property, index) => {
                    const propertyType = properties_types.find(pt => pt.id === property.type)?.name || "Unknown";

                    return (
                        <PropertyCard
                            key={index}
                            title={property.name}
                            images={property.images[0]}
                            description={property.description}
                            type={propertyType}
                            bedroom={property.bedrooms}
                            price={property.price}
                            bathroom={property.bathrooms}
                        />
                    );
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                nextPage={nextPage}
                previousPage={previousPage}
            />
        </Section>
    );
};

export default FeaturedProperties;