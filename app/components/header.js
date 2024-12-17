'use client';
import styles from "../assets/css/style.module.css";
import { useEffect, useState } from 'react';
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        // 加载 animatescroll.js
        const script = document.createElement('script');
        script.src = '/js/animatescroll.js'; // 确保路径正确
        document.body.appendChild(script);

        // 处理滚动事件
        const handleScroll = () => {
            if (window.scrollY > 100) {  // 当滚动超过 100px 时
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // 获取所有目标部分（使用 dd 标签）
            const sections = document.querySelectorAll('dd.scroll-target'); // 修改为 dd 元素
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                // 判断部分是否在视口中
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveLink(section.id); // 更新当前活动链接
                }
            });
        };

        // 添加滚动事件监听器
        window.addEventListener('scroll', handleScroll);

        // 清理时移除监听
        return () => {
            document.body.removeChild(script);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // 点击链接时，滚动到目标部分
    const handleClick = (sectionId, event) => {
        event.preventDefault();  // 阻止默认链接行为
        setActiveLink(sectionId);  // 设置当前活动链接
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
