"use client";

import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        const handleChange = () => setMatches(mediaQuery.matches);

        // Comprobar inicialmente
        handleChange();

        // Escuchar cambios
        mediaQuery.addEventListener("change", handleChange);

        // Limpiar evento al desmontar
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [query]);

    return matches;
};

export default useMediaQuery;