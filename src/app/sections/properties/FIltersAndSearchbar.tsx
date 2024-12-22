import React from 'react';
import usePropertyStore from '@/app/store/useFiltersStore';
import styles from "@/app/styles/components/properties/FiltersAndSearchbar.module.scss";
import { Button } from '@/components/ui/button';

import { PROPERTYTYPE, LOCATION, CUBE, MONEY, BEDROOMB } from "@/lib/image";
import FilterSelect from './Select';

//eslint-disable-next-line
interface FiltersAndSearchBarProps {
    // Define props here
}




const FiltersAndSearchBar: React.FC<FiltersAndSearchBarProps> = () => {
    const setCriteria = usePropertyStore((state) => state.setCriteria);
    const applyFilters = usePropertyStore((state) => state.applyFilters);
    const propertyTypes = usePropertyStore((state) => state.propertyTypes);
    const properties = usePropertyStore((state) => state.properties);

    const uniqueLocations = Array.from(
        new Set(properties.map((property) => property.location))
    );


    const handleSizeChange = (value: string | null) => {
        if (value === "0") {
            setCriteria({ sizeRange: undefined }); // Sin rango (mostrar todas las propiedades)
        } else if (value) {
            const [min, max] = value.split("-").map((v) => parseInt(v, 10));
            setCriteria({ sizeRange: [min, max] });
        }
        applyFilters();
    };
    const handleTypeChange = (value: string | null) => {
        if (value === "0") {
            setCriteria({ type: undefined });
        } else if (value !== null && !isNaN(parseInt(value, 10))) {
            setCriteria({ type: parseInt(value, 10) });
        }
        applyFilters();
    };

    const handleLocationChange = (value: string | null) => {
        if (value === "all") {
            setCriteria({ location: undefined });
        } else {
            setCriteria({ location: value || undefined });
        }
        applyFilters();
    };

    const handlePriceChange = (value: string | null) => {
        if (value === "0") {
            setCriteria({ priceRange: undefined });
        } else if (value) {
            const [min, max] = value.split("-").map((v) => parseInt(v, 10));
            setCriteria({ priceRange: [min, max] });
        }
        applyFilters();
    };

    const handleBedroomsChange = (value: string | null) => {
        if (value === "0") {
            setCriteria({ bedroomRange: undefined });
        } else if (value !== null && !isNaN(parseInt(value, 10))) {
            setCriteria({ bedroomRange: parseInt(value, 10) });
        }
        applyFilters();
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCriteria({ query: e.target.value });
        applyFilters();
    };


    const filterOptions = {

        location: {
            placeholder: "Location",
            options: [
                { label: "Location", value: "all" },
                ...uniqueLocations.map((location) => ({
                    label: location,
                    value: location,
                })),
            ],
            icon: LOCATION,
            onValueChange: handleLocationChange,
        },

        propertyType: {
            placeholder: "Property Type",
            options: [{ label: "Property Type", value: "0" }, ...propertyTypes.map((type) => ({
                label: type.name,
                value: type.id.toString(),
            }))],
            icon: PROPERTYTYPE,
            onValueChange: handleTypeChange,
        },

        sizeRange: {
            placeholder: "Property Size",
            options: [
                { label: "Property Size", value: "0" },
                { label: "0 - 500 sqft", value: "0-500" },
                { label: "501 - 1,000 sqft", value: "501-1000" },
                { label: "1,001 - 1,500 sqft", value: "1001-1500" },
                { label: "1,501 - 2,000 sqft", value: "1501-2000" },
                { label: "2,001 - 3,000 sqft", value: "2001-3000" },
                { label: "3,001 - 4,000 sqft", value: "3001-4000" },
                { label: "4,001 - 5,000 sqft", value: "4001-5000" },
            ],
            icon: CUBE,
            onValueChange: handleSizeChange,
        },

        priceRange: {
            placeholder: "Property Price",
            options: [
                { label: "Property Price", value: "0" },
                { label: "$0 - $50,000", value: "0-50000" },
                { label: "$50,001 - $100,000", value: "50001-100000" },
                { label: "$100,001 - $150,000", value: "100001-150000" },
                { label: "$150,001 - $200,000", value: "150001-200000" },
                { label: "$200,001 - $250,000", value: "200001-250000" },
            ],
            icon: MONEY,
            onValueChange: handlePriceChange,
        },

        bedroomsQuantity: {
            placeholder: "Bedrooms",
            options: [
                { label: "Bedrooms", value: "0" },
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
            ],
            icon: BEDROOMB,
            onValueChange: handleBedroomsChange,
        },


    };

    return (
        <div className={styles.layout}>
            <div className={styles.searchBarContainer}>
                <input
                    type="text"
                    placeholder="Search by name"
                    onChange={handleSearch}
                />
                <Button variant="default">Find Property</Button>
            </div>
            <div className={styles.selectorsContainer}>
                <div className={styles.selectorsContainer}>
                    {Object.values(filterOptions).map((filter, index) => (
                        <FilterSelect
                            key={index}
                            placeholder={filter.placeholder}
                            options={filter.options}
                            icon={filter.icon}
                            onValueChange={filter.onValueChange}
                        />
                    ))}
                </div>


            </div>


        </div>
    );
};

export default FiltersAndSearchBar;