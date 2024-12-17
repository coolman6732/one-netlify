'use client';

import { useEffect } from 'react';
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "@/public/lottie/data.json";
import Robot from "@/public/lottie/robot.json";
import styles from "./assets/css/style.module.css";
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

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            var slider = new MasterSlider();
            slider.setup('masterslider', {
                width: 800,
                height: 768,
                fullwidth: true,
                autoHeight: true,
                mouse: true,
                view: "basic"
            });

            // 初始化 WOW.js
            const wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();

        }
    }, []);

    return (
        <>
            <div className={styles.banner}>
                <div className={styles.inner}>
                    <h2 className={yesevaOne.className}>
                        Infinity <br />Game Studio
                        <p className={varelaRound.className}>Creating Unforgettable Gaming Experiences</p>
                        <Image className={styles.appIcn} src="/images/appIcon.png" alt="appIcon" width={402} height={59} />
                    </h2>
                    <div className="master-slider ms-skin-default" id="masterslider">
                        <div className="ms-slide" data-delay="1">
                            <Image
                                className="ms-layer"
                                data-offset-x="20"
                                data-offset-y="50"
                                data-origin="tr"
                                data-type="image"
                                data-resize="true"
                                data-effect="back(1000,true)"
                                data-duration="1300"
                                data-fixed="true"
                                data-delay="600"
                                data-parallax="2"
                                data-ease="easeOutQuart"
                                src="/images/banIcn2.png"
                                alt="banner圖"
                                width={289}
                                height={351}
                                style={{ position: 'absolute' }}
                            />
                            <Image
                                className="ms-layer"
                                data-offset-x="150"
                                data-offset-y="0"
                                data-origin="tr"
                                data-type="image"
                                data-resize="true"
                                data-effect="back(1000,true)"
                                data-duration="1300"
                                data-fixed="true"
                                data-delay="300"
                                data-parallax="4"
                                data-ease="easeOutQuart"
                                src="/images/banIcn1.png"
                                alt="banner圖"
                                width={702}
                                height={689}
                                style={{ position: 'absolute' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <dl>
                <dd id='about' className={`${styles.row1} scroll-target`}>
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <Image className={`${styles.people} wow slideInLeft`} src="/images/row1People.png" alt="" width={494} height={741} layout="intrinsic" data-wow-duration="2s" data-wow-delay="0.5s" />
                            <Image className={`${styles["gameIcn"]} wow slideInDown`} src="/images/rowGameIcn.png" alt="" width={442} height={557} layout="intrinsic" data-wow-duration="2s" data-wow-delay="0.8s" />
                        </div>
                        <div className={styles.right}>
                            <h3 className={`${baloo.className} ${styles.title}`}>About Inspirain</h3>
                            <p className={styles.info}>Redefining Gaming, Creating Extraordinary Journeys</p>
                            <h4 className={styles.info}>
                                Welcome to Inspirain Infinity Game Studio, where the boundaries of reality are redrawn and the world of gaming is reimagined. We are a dynamic and innovative game development company dedicated to creating unforgettable gaming experiences for players around the globe.

                                Founded by a team of passionate gamers and seasoned industry veterans, we are committed to pushing the limits of creativity and technology to build games that are not just played, but experienced. Our diverse portfolio spans a wide range of genres, from immersive RPGs and adrenaline-fueled racing games to engaging puzzle games and action-packed shooters.


                                At Inspirain Infinity Game Studio, we believe that every game is a journey, and we are dedicated to making that journey extraordinary. We incorporate stunning graphics, compelling storylines, and innovative gameplay mechanics to create games that captivate and inspire.
                            </h4>
                        </div>
                    </div>
                </dd>
                <div className={styles.inner}>
                    <h3 className={`${baloo.className} ${styles.title}`}>Our Games</h3>
                    <p className={styles.info} style={{ color: '#000' }}>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
                <dd id='Kipon' className={`${styles.row2} scroll-target`}>
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <h3 className={`${baloo.className} ${styles.title}`}> Kipon</h3>
                            <p className={styles.info}>A One-of-a-Kind Game That Offers Endless Excitement at Your Fingertips.</p>
                            <h4 className={styles.info}>Dive into the world of Kipon, a unique, free casual game by Sunjet. With its captivating gameplay and vibrant visuals, Kipon promises endless excitement at your fingertips. Whether you're a casual gamer or a seasoned pro, Kipon offers a fun-filled journey for everyone. Start your Kipon adventure today!</h4>
                            <Image className={styles.appIcn} src="/images/appIcon.png" alt="appIcon" width={402} height={59} />
                        </div>
                        <Lottie
                            animationData={animationData}
                            className={`${styles["gameIcn"]} wow slideInRight`}
                            loop={true}
                        />
                    </div>
                </dd>
                <dd id="robotrix" className={`${styles.row3} scroll-target`}>
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <h3 className={`${baloo.className} ${styles.title}`}> Robotrix</h3>
                            <p className={styles.info}>Enjoy Tactical Combat and Secrets to Find With Robotrix.</p>
                            <h4 className={styles.info}>Step into the thrilling realm of Robotrix, a free RPG game by Sunjet. Engage in tactical combat, unravel secrets, and embark on epic quests in this immersive game world. With its rich storyline and strategic gameplay, Robotrix delivers a captivating gaming experience. Dive into Robotrix today and begin your extraordinary RPG adventure!</h4>
                            <Image className={styles.appIcn} src="/images/appIcon.png" alt="appIcon" width={402} height={59} />
                        </div>
                        <Lottie
                            animationData={Robot}
                            className={`${styles["gameIcn"]} wow slideInLeft`}
                            loop={true}
                        />
                    </div>
                </dd>
                <dd id="Treasure" className={`${styles.row4} scroll-target`}>
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <h3 className={`${baloo.className} ${styles.title}`}>Treasure Box</h3>
                            <p className={styles.info}>A Free-to-Play Adventure Game That Seriously Packs a Punch</p>
                            <h4 className={styles.info}>Step into the captivating realm of Treasure Box, a free-to-play adventure game from Sunjet. With its compelling quests, strategic gameplay, and immersive narrative, Treasure Box delivers a gaming experience that truly packs a punch. Begin your extraordinary journey with Treasure Box today, and unlock the adventure of a lifetime.
                            </h4>
                            <Image className={styles.appIcn} src="/images/appIcon.png" alt="appIcon" width={402} height={59} />
                        </div>
                        <Image className={`${styles["gameIcn"]} wow slideInRight`} src="/images/row4Icn.png" alt="" width={538} height={508} layout="intrinsic" data-wow-duration="2s" data-wow-delay="0.8s" />
                    </div>
                </dd>
            </dl>
        </>
    );
}
