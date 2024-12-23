"use client"
import React from 'react';
import Hero from "@/app/sections/about/Hero";
import OurValues from '../sections/about/OurValues';
import OurAchivements from '../sections/about/OurAchivements';
import OurExperience from '../sections/about/OurExperience';
import OurTeam from '../sections/about/OurTeam';

//eslint-disable-next-line
interface AboutProps {
    // Define props here
}

const About: React.FC<AboutProps> = () => {
    return (
        <main>
            <Hero />
            <OurValues />
            <OurAchivements />
            <OurExperience />
            <OurTeam />
        </main>
    );
}

export default About;