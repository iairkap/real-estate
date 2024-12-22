"use client";

import { useState } from "react";

interface PaginationHookProps {
  total: number;
  cardsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const usePagination = ({
  total,
  cardsPerPage,
  setCurrentPage,
}: PaginationHookProps) => {
  const [currentPage, setCurrentPageState] = useState(1);
  const totalPages = Math.ceil(total / cardsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPageState(page);
      setCurrentPage(page); // Actualiza la página en el componente padre
    }
  };

  const nextPage = () => {
    goToPage(currentPage + 1);
  };

  const previousPage = () => {
    goToPage(currentPage - 1);
  };

  return { currentPage, totalPages, nextPage, previousPage };
};

export default usePagination;
