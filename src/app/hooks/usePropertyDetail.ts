import { useEffect, useState } from "react";
import usePropertyStore from "@/app/store/useFiltersStore";
import axios from "axios";
import jsonData from "@/app/db/hardcode.json";

const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const UNSPLASH_CLIENT_ID = "ArZr8AqPEMoy8yvkyyxLrLR1X9ht1TNpEVh3Agzq7RU";

export const usePropertyDetails = (id: string | undefined) => {
  const [pictures, setPictures] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const loadProperties = usePropertyStore((state) => state.loadProperties);
  const loadPropertyById = usePropertyStore((state) => state.loadPropertyById);
  const filteredProperties = usePropertyStore(
    (state) => state.filteredProperties
  );

  // Carga las propiedades al inicializar
  useEffect(() => {
    loadProperties(jsonData.properties);
  }, [loadProperties]);

  // Carga una propiedad específica basada en el ID
  useEffect(() => {
    if (id) {
      loadPropertyById(parseInt(id, 10));
    }
  }, [id, loadPropertyById]);

  // Lógica para obtener imágenes desde Unsplash
  useEffect(() => {
    setLoading(true);
    if (filteredProperties.length > 0 && filteredProperties[0].location) {
      const searchQuery = `luxury real estate house villa`;

      axios
        .get(UNSPLASH_API_URL, {
          params: {
            query: searchQuery,
            client_id: UNSPLASH_CLIENT_ID,
            per_page: 12,
          },
        })
        .then((response) => {
          if (response.data && response.data.results) {
            const imageUrls = response.data.results.map(
              (item: { urls: { regular: string } }) => item.urls.regular
            );
            setPictures(imageUrls);
          } else {
            console.error("No images found for query:", response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
    /* agregar 5 segundos de retraso */

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [filteredProperties]);

  return { filteredProperties, pictures, loading };
};
