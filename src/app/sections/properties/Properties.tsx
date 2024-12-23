
"use client"
import React from 'react';
import Section from '@/app/components/sections/section';
import styles from "@/app/styles/components/propertyCards/Property.module.scss";
import PropertyCard from "@/app/components/propertyCard/PropertyCard";
import Pagination from '@/app/components/pagination/Pagination';
import usePagination from "@/app/hooks/usePagination";
import usePropertyStore from '@/app/store/useFiltersStore';
import useMediaQuery from '@/app/hooks/useMediaQuery';




const Properties: React.FC = () => {

    const isMobile = useMediaQuery("(max-width: 768px)"); // Detecta si la pantalla es móvil

    const properties = usePropertyStore((state) => state.filteredProperties);
    const propertiesTypes = usePropertyStore((state) => state.propertyTypes);
    const cardsPerPage = isMobile ? 1 : 6; // Ajusta la cantidad de cards según el tamaño

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

    console.log(propertiesToShow);

    return (
        <div className={styles.fixPadding}>
            <Section
                title="Discover a World of Possibilities"
                description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
                button="View All Properties"
            >
                <div className={styles.cardContainerb}>
                    {propertiesToShow.map((property, index) => {
                        const propertyType = propertiesTypes.find(pt => pt.id === property.type)?.name || "Unknown";
                        return (
                            <PropertyCard
                                id={property.id}
                                key={index}
                                title={property.name}
                                images={property.images[0]}
                                description={property.description}
                                type={propertyType}
                                bedroom={property.bedrooms}
                                price={property.price}
                                showChips={false}
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
        </div>
    );
};

export default Properties;