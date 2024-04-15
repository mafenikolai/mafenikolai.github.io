import React, { useState } from "react";
import styles from "./Navbar.module.css";

import CloseIcon from "../../assets/nav/closeIcon.svg";
import MenuIcon from "../../assets/nav/menuIcon.svg";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                M & N
                </a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={
                        menuOpen
                            ? CloseIcon
                            : MenuIcon
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about">MAFÊ E NIKOLAI</a>
                    </li>
                    <li>
                        <a href="#evento">EVENTO</a>
                    </li>
                    <li>
                        <a href="#hotel">HOSPEDAGEM</a>
                    </li>
                    <li>
                        <a href="#gifts">LISTA DE PRESENTES</a>
                    </li>
                    <li>
                        <a href="#contact">RSVP</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
