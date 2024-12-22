import React from 'react';
import styles from "@/app/properties/page.module.scss"
import Separacion from '../components/separacion/Separacion';
import ServiceCard from '../sections/services/ServiceCard';

//eslint-disable-next-line
interface AboutProps {
}

const About: React.FC<AboutProps> = () => {
    return (
        <main className={styles.mainLayout}>
            <div className={styles.header}>
                <h1>Elevate Your Real Estate Experience</h1>
                <p>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams. </p>
            </div>
            <Separacion />
            <ServiceCard title="Unlock Property Value" description='Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey' />
            <ServiceCard title="Effortless Property Management" description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you" />
        </main>);
}

export default About;