
"use client"
import React from 'react';
import styles from "@/app/styles/components/faq/FaqContainer.module.scss";
import usePagination from "@/app/hooks/usePagination";
import Section from "@/app/components/sections/section";
import { FAQ } from '../constants/constants';
import Pagination from '../components/pagination/Pagination';
import { Button } from '@/components/ui/button';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import useAOS from '../hooks/useAOS';


//eslint-disable-next-line
interface FAQContainerProps { }

const FAQContainer: React.FC<FAQContainerProps> = () => {
    useAOS();


    const isMobile = useMediaQuery("(max-width: 768px)"); // Detecta si la pantalla es móvil

    const cardsPerPage = isMobile ? 1 : 3; // Ajusta la cantidad de cards según el tamaño

    const { currentPage, totalPages, nextPage, previousPage } = usePagination({
        total: FAQ.length,
        cardsPerPage: cardsPerPage,
        setCurrentPage: (page) => {
            console.log(page);
        },
    });

    const faqsToShow = FAQ.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );


    return (
        <Section
            title="Frequently Asked Questions"
            description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            button="View All Properties"
        >
            <div className={styles.cardContainer}>
                {faqsToShow.map((faq, index) => {
                    return (
                        <div className={styles.card} key={index} data-aos="fade" data-aos-delay={index * 100}
                        >
                            <h3 className={styles.title}>{faq.question}</h3>
                            <p>{faq.sub}</p>
                            <div className={styles.buttonContainer}>
                                <Button
                                    variant='secondary'
                                > Read More
                                </Button>
                            </div>

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
        </Section>
    );
};

export default FAQContainer;