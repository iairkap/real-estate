import { useState, useMemo } from "react";

interface FilterCriteria {
  location?: string;
  type?: string;
  priceRange?: [number, number];
  sizeRange?: [number, number];
  query?: string;
}

export const useFilter = (
  //eslint-disable-next-line
  data: any[],
  initialCriteria: FilterCriteria = {}
) => {
  const [criteria, setCriteria] = useState<FilterCriteria>(initialCriteria);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Filtrar por ubicación
      if (criteria.location && item.location !== criteria.location) {
        return false;
      }

      // Filtrar por tipo de propiedad
      if (criteria.type && item.type !== criteria.type) {
        return false;
      }

      // Filtrar por rango de precio
      if (
        criteria.priceRange &&
        (item.price < criteria.priceRange[0] ||
          item.price > criteria.priceRange[1])
      ) {
        return false;
      }

      // Filtrar por rango de tamaño
      if (
        criteria.sizeRange &&
        (item.area < criteria.sizeRange[0] || item.area > criteria.sizeRange[1])
      ) {
        return false;
      }

      // Filtrar por búsqueda
      if (
        criteria.query &&
        !item.name.toLowerCase().includes(criteria.query.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  }, [data, criteria]);

  const updateCriteria = (newCriteria: Partial<FilterCriteria>) => {
    setCriteria((prev) => ({ ...prev, ...newCriteria }));
  };

  return { filteredData, criteria, setCriteria: updateCriteria };
};
