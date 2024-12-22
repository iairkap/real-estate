"use client"

import React, { useEffect } from 'react';
import styles from './page.module.scss';
import FiltersAndSearchBar from '../sections/properties/FIltersAndSearchbar';
import jsonData from '../db/hardcode.json';
import usePropertyStore from '../store/useFiltersStore';
import Properties from "@/app/sections/properties/Properties"
import FormLetsMakeItHappen from '../sections/properties/Form';
import Section from '../components/sections/section';
interface AboutProps {
    // Define props here
    a?: string;
}

const About: React.FC<AboutProps> = () => {
    const loadProperties = usePropertyStore((state) => state.loadProperties);
    const loadPropertyTypes = usePropertyStore((state) => state.loadPropertyTypes);

    useEffect(() => {
        loadProperties(jsonData.properties); // Carga las propiedades desde el JSON
        loadPropertyTypes(jsonData.properties_types); // Carga los tipos de propiedad desde el JSON

    }, [loadProperties, loadPropertyTypes]);

    return (
        <main className={styles.mainLayout}>
            <div className={styles.header}>
                <h1>Find your Dream Property</h1>
                <p>Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
            </div>
            <FiltersAndSearchBar />
            <Properties />
            <Section title="Let’s make it happen" description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait let's embark on this exciting journey togetheer" >
                <FormLetsMakeItHappen onSubmit={(data) => console.log(data)} />
            </Section>
        </main >
    );
}

export default About;