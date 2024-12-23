
"use client"
import React from 'react';
import Section from '../components/sections/section';
import hardcode from "@/app/db/hardcode.json";
import styles from "@/app/styles/components/propertyCards/Property.module.scss";
import PropertyCard from "@/app/components/propertyCard/PropertyCard";
import Pagination from '../components/pagination/Pagination';
import usePagination from "@/app/hooks/usePagination";
import useMediaQuery from '../hooks/useMediaQuery';
//eslint-disable-next-line
interface FeaturedPropertiesProps { }

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = () => {
    const isMobile = useMediaQuery("(max-width: 768px)"); // Detecta si la pantalla es móvil
    const properties_types = hardcode.properties_types;
    const properties = hardcode.properties;
    const cardsPerPage = isMobile ? 1 : 3; // Ajusta la cantidad de cards según el tamaño
    const { currentPage, totalPages, nextPage, previousPage } = usePagination({
        total: properties.length,
        cardsPerPage: cardsPerPage,
        setCurrentPage: (page) => {
            console.log(page);
        },
    });


    const propertiesToShow = properties.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
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
                            showChips={true}
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