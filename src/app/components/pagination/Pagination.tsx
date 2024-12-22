"use client"
import React from 'react';
import { NEXT } from "@/lib/image";
import styles from "@/app/styles/components/pagination/Pagination.module.scss";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    nextPage: () => void;
    previousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, nextPage, previousPage }) => {
    return (
        <article className={styles.paginationLayout}>
            <div className={styles.numeration}>
                <p>{currentPage} of {totalPages}</p>
            </div>
            <div className={styles.arrowsContainer}>
                <button className={styles.iconContainer} onClick={previousPage} disabled={currentPage === 1}>
                    <svg
                        width="28"
                        height="28"
                        className={styles.backicon}

                    >
                        <use xlinkHref={NEXT}></use>
                    </svg>
                </button>
                <button className={styles.iconContainer} onClick={nextPage} disabled={currentPage === totalPages}>
                    <svg
                        width="28"
                        height="28"
                        className={styles.icon}
                    >
                        <use xlinkHref={NEXT}></use>
                    </svg>
                </button>
            </div>
        </article>
    );
}

export default Pagination;