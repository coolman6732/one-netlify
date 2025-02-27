'use client';
import styles from "../assets/css/style.module.css";
import { useEffect, useState } from 'react';
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll('dd.scroll-target');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.body.removeChild(script);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleClick = (sectionId, event) => {
        event.preventDefault();
        setActiveLink(sectionId);
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.fixNav : ''}`}>
                <div className={styles.inner}>
                    <a href="" className={styles["logo"]}>Inspirain</a>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'about' ? styles.active : ''}
                                onClick={(e) => handleClick('about', e)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'Kipon' ? styles.active : ''}
                                onClick={(e) => handleClick('Kipon', e)}
                            >
                                Kipon
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'robotrix' ? styles.active : ''}
                                onClick={(e) => handleClick('robotrix', e)}
                            >
                                Robotrix
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={activeLink === 'Treasure' ? styles.active : ''}
                                onClick={(e) => handleClick('Treasure', e)}
                            >
                                Treasure Box
                            </a>
                        </li>
                    </ul>
                </div>
            </header >
        </>
    );
}
