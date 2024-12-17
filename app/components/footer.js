'use client';

import Image from "next/image";
import styles from "../assets/css/style.module.css";
import { Yeseva_One, Varela_Round, Baloo_2 } from "next/font/google";

const yesevaOne = Yeseva_One({
    variable: "--font-yeseva-sans",
    subsets: ['latin'],
    weight: '400',
});

const varelaRound = Varela_Round({
    variable: '--font-varela-round',
    subsets: ['latin'],
    weight: '400',
});

const baloo = Baloo_2({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
});


export default function Footer() {

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.inner}>
                    <div className={styles.column}>
                        <h2>Contact</h2>
                        <ul>
                            <li>Inspirain Technology Co., Limited</li>
                            <li>email  contact@Inspirain.games</li>
                            <li>Tel  +852-3-5636688</li>
                            <li>Room 02, 21 on Ground Floor, Hip Kwan Commercial Building, No.38 Pitt Street, Kowloon, Hong Kong</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h2>Navigation</h2>
                        <ul>
                            <li> Games</li>
                            <li> About</li>
                            <li> Contact</li>
                            <li> Privacy Policy</li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h2>Find Us On</h2>
                        <Image className={styles.gameIcn} src="/images/footerAppIcn.png" alt="" width={197} height={133} layout="intrinsic" data-wow-duration="2s" data-wow-delay="0.8s" />
                    </div>
                </div>
            </footer>
        </>
    );
}