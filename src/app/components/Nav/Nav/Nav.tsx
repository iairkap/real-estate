"use client"
import React, { useState } from 'react';
import styles from "@/app/styles/components/Nav/Nav.module.scss";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { LOGO, ESTATIN } from '@/lib/image';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavBarProps {
    a?: string;
}

const NavBar: React.FC<NavBarProps> = ({ }) => {

    const pathName = usePathname();
    console.log(pathName)
    const [navActive, setNavActive] = useState(pathName);

    const navNavigation = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about' },
        { name: 'Properties', link: '/properties' },
        { name: 'Services', link: '/services' }
    ];

    const getButtonVariant = (link: string) => {
        return navActive === link ? 'secondary' : 'ghost';
    };

    return (
        <main className={styles.navBar}>
            <section className={styles.logo}>
                <img src={LOGO} alt="logo" />
                <img src={ESTATIN} alt="logo" />
            </section>
            <section className={styles.navigationButtons}>
                {navNavigation.map((item, index) => (
                    <Link key={index} href={item.link} onClick={() => setNavActive(item.link)}>
                        <Button variant={getButtonVariant(item.link)}>{item.name}</Button>
                    </Link>
                ))}
            </section>
            <section className={styles.contactUs}>
                <Link href={'/contact'}>
                    <Button variant='secondary'>Contact Us</Button>
                </Link>
            </section>
        </main>
    );
}

export default NavBar;