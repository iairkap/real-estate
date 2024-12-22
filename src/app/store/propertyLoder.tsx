import { useEffect, useCallback } from "react";
import usePropertyStore from "./useFiltersStore";
import jsonData from "@/app/db/hardcode.json"; // Importa tu JSON aquí

const PropertyLoader = () => {
  const loadProperties = usePropertyStore((state) => state.loadProperties);
  const loadPropertyTypes = usePropertyStore((state) => state.loadPropertyTypes);

  const loadPropertiesCallback = useCallback(() => {
    loadProperties(jsonData.properties); // Carga las propiedades desde el JSON
  }, [loadProperties]);

  const loadPropertyTypesCallback = useCallback(() => {
    loadPropertyTypes(jsonData.properties_types); // Carga los tipos de propiedad desde el JSON
  }, [loadPropertyTypes]);


  useEffect(() => {
    loadPropertiesCallback();
    loadPropertyTypesCallback();
  }, [loadPropertiesCallback, loadPropertyTypesCallback]);

  return null;
};

export default PropertyLoader;