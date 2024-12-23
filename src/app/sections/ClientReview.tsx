"use client"
import React from 'react';
import Section from '../components/sections/section';
import hardcode from "@/app/db/hardcode.json";
import Pagination from '../components/pagination/Pagination';
import usePagination from '../hooks/usePagination';
import ClientReviewCard from '../components/clientCard/ClientReviewCard';
import styles from "@/app/styles/components/clientCard/ClientReviewCard.module.scss";
import useMediaQuery from '@/app/hooks/useMediaQuery';
import 'aos/dist/aos.css';
import useAOS from '../hooks/useAOS';
const ClientReview: React.FC = ({ }) => {

    useAOS();
    const isMobile = useMediaQuery("(max-width: 768px)"); // Detecta si la pantalla es móvil
    const clients_reviews = hardcode.clients_reviews;
    const cardsPerPage = isMobile ? 1 : 3; // Ajusta la cantidad de cards según el tamaño
    const { currentPage, totalPages, nextPage, previousPage } = usePagination({
        total: clients_reviews.length,
        cardsPerPage: cardsPerPage,
        setCurrentPage: (page) => {
            console.log(page);
        },
    });


    const clientsToShow = clients_reviews.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );


    return (
        <Section
            title="What Our Clients Say"
            description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            button="View All Properties"
        >
            <div className={styles.cardContainer} >
                {clientsToShow.map((client, index) => {
                    return (
                        <div key={index}
                            data-aos="fade"
                            data-aos-delay={index * 100}
                        >
                            <ClientReviewCard
                                name={client.name}
                                title={client.title}
                                description={client.description}
                                location={client.location}
                                rating={client.rating}
                                avatar={client.avatar}
                            />
                        </div>
                    );
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                nextPage={nextPage}
                previousPage={previousPage}
            />
        </Section>);
}

export default ClientReview;