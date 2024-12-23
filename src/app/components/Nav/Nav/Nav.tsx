"use client"
import React, { useState } from 'react';
import styles from "@/app/styles/components/Nav/Nav.module.scss";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { LOGO, ESTATIN } from '@/lib/image';
import useMediaQuery from '@/app/hooks/useMediaQuery';


// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavBarProps {
    a?: string;
}

const NavBar: React.FC<NavBarProps> = ({ }) => {

    const isMobile = useMediaQuery("(max-width: 768px)"); // Detecta si la pantalla es móvil
    const pathName = usePathname();
    const [navActive, setNavActive] = useState(pathName);
    const [isOpen, setIsOpen] = useState(false);

    const navNavigation = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about' },
        { name: 'Properties', link: '/properties' },
        { name: 'Services', link: '/services' }
    ];

    const getButtonVariant = (link: string) => {
        return navActive === link ? 'secondary' : 'ghost';
    };

    const handleClickMenu = () => {
        setIsOpen(!isOpen);
    };



    if (isMobile) {
        return (
            <main className={styles.navBarMobile}>
                <nav
                    className={`${styles.btnMenu} ${isOpen ? styles.isOpen : ""}`}
                    onClick={handleClickMenu}
                >
                    <div className={styles.menuLine}></div>
                    <div className={styles.menuLine}></div>
                    <div className={styles.menuLine}></div>
                </nav>

                <div
                    className={`${styles.menuContent} ${isOpen ? styles.isOpen : ""}`}
                >
                    {navNavigation.map((item, index) => (
                        <Link key={index} href={item.link} onClick={() => setNavActive(item.link)}>
                            <Button variant={getButtonVariant(item.link)} onClick={() => { setIsOpen(false) }}>{item.name}</Button>
                        </Link>
                    ))}
                </div>


            </main>
        );
    }
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