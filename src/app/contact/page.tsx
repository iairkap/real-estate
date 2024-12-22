"use client"
import React from 'react';
import styles from "@/app/properties/page.module.scss"
import Separacion from "@/app/components/separacion/Separacion";
import FormLetsMakeItHappen from '../sections/properties/Form';
import Section from '../components/sections/section';
import AboutUs from "@/app/sections/contact/AboutUs"

//eslint-disable-next-line
interface ContactPageProps {
    // Define props here
}


const ContactPage: React.FC<ContactPageProps> = () => {
    return (
        <main className={styles.mainLayout}>
            <div className={styles.header}>
                <h1>Get in Touch with Estatein</h1>
                <p>Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist you with any inquiries, requests, or feedback you may have. Whether you&apos;re looking to buy or sell a property, explore investment opportunities, or simply want to connect, we&apos;re just a message away. Reach out to us, and let&apos;s start a conversation.</p>
            </div>
            <Separacion contactForm={true} />
            <Section title="Let's Connect" description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.">
                <FormLetsMakeItHappen onSubmit={(data) => console.log(data)} />
            </Section>
            <AboutUs />

        </main >
    );
}


export default ContactPage;