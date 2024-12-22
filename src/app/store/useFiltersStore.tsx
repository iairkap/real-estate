import { create } from "zustand";

export interface Property {
    id: number;
    name: string;
    description: string;
    location: string;
    status: number;
    type: number;
    price: number;
    area: number;
    bathrooms: number;
    bedrooms: number;
    garage: number;
    key_features: string[];
    images: string[];
    fees: {
        transfer_tax: number;
        legal_fees: number;
        property_insurance: number;
        home_inspection: number;
    };
}

interface Property_Types {
    id: number;
    name: string
}

interface FilterCriteria {
    location?: string;
    type?: number;
    priceRange?: [number, number];
    sizeRange?: [number, number];
    query?: string;
    bedroomRange?: number;
}

interface PropertyStore {
    properties: Property[];
    propertyTypes: Property_Types[];
    filteredProperties: Property[];
    criteria: FilterCriteria;
    loadPropertyById: (id: number) => void;
    loadProperties: (data: Property[]) => void;
    loadPropertyTypes: (data: Property_Types[]) => void;
    setCriteria: (newCriteria: Partial<FilterCriteria>) => void;
    applyFilters: () => void;
}

const usePropertyStore = create<PropertyStore>((set, get) => ({
    properties: [],
    propertyTypes: [],
    filteredProperties: [],
    criteria: {},

    // Carga inicial de las propiedades
    loadProperties: (data) =>
        set({ properties: data, filteredProperties: data }),

    loadPropertyById: (id) => {
        const property = get().properties.find((property) => property.id === id);
        if (property) {
            set({ filteredProperties: [property] });
        }
    },
    // Carga inicial de los tipos de propiedad
    loadPropertyTypes: (data) => set({ propertyTypes: data }),

    // Actualiza los criterios de filtro
    setCriteria: (newCriteria) =>
        set((state) => ({
            criteria: { ...state.criteria, ...newCriteria },
        })),

    // Aplica los filtros y actualiza las propiedades filtradas
    applyFilters: () => {
        const { properties, criteria } = get();
        const filtered = properties.filter((property) => {
            // Filtro por tipo
            if (criteria.type && property.type !== criteria.type) {
                return false;
            }

            // Filtro por ubicación
            if (criteria.location && property.location !== criteria.location) {
                return false;
            }

            // Filtro por rango de precio
            if (
                criteria.priceRange &&
                (property.price < criteria.priceRange[0] || property.price > criteria.priceRange[1])
            ) {
                return false;
            }

            // Filtro por rango de tamaño
            if (
                criteria.sizeRange &&
                (property.area < criteria.sizeRange[0] || property.area > criteria.sizeRange[1])
            ) {
                return false;
            }

            // Filtro por rango de habitaciones

            if (criteria.bedroomRange && property.bedrooms !== criteria.bedroomRange) {
                return false;
            }
            // Filtro por búsqueda
            if (criteria.query && !property.name.toLowerCase().includes(criteria.query.toLowerCase())) {
                return false;
            }

            return true;
        });


        set({ filteredProperties: filtered });
    },
}));

export default usePropertyStore;