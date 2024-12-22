"use client"
import React from 'react';
import Section from '../components/sections/section';
import hardcode from "@/app/db/hardcode.json";
import Pagination from '../components/pagination/Pagination';
import usePagination from '../hooks/usePagination';
import ClientReviewCard from '../components/clientCard/ClientReviewCard';
import styles from "@/app/styles/components/clientCard/ClientReviewCard.module.scss";

//eslint-disable-next-line
interface ClientReviewProps {
    // Define props here
}

const ClientReview: React.FC<ClientReviewProps> = ({ }) => {

    const clients_reviews = hardcode.clients_reviews;


    const { currentPage, totalPages, nextPage, previousPage } = usePagination({
        total: clients_reviews.length,
        cardsPerPage: 3,
        setCurrentPage: (page) => {
            console.log(page);
        },
    });


    const clientsToShow = clients_reviews.slice(
        (currentPage - 1) * 3,
        currentPage * 3
    );


    return (
        <Section
            title="What Our Clients Say"
            description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            button="View All Properties"
        >
            <div className={styles.cardContainer}>
                {clientsToShow.map((client, index) => {
                    return (
                        <ClientReviewCard
                            key={index}
                            name={client.name}
                            title={client.title}
                            description={client.description}
                            location={client.location}
                            rating={client.rating}
                            avatar={client.avatar}
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
        </Section>);
}

export default ClientReview;