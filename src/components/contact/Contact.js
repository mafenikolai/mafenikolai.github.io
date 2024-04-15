import React from "react";
import styles from "./Contact.module.css";

import WhatsBlue from "../../assets/contact/whats-blue.svg";
import Whats from "../../assets/contact/whats-white.svg";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>RSVP</h2>
                <h4 className={styles.subtitle}>Por gentileza, confirmar presença diretamente com os noivos até 30/07</h4>
            </div>
            <ul className={StyleSheet.links}>
                <li className={styles.link}>
                    <img className={styles.links} src={Whats} alt="whats-icon" />
                    <p>Mafê • (41) 99835-8181</p>
                </li>
                <li className={styles.link}>
                    <img className={styles.links} src={Whats} alt="whats-icon" />
                    <p>Nikolai • (41) 99548-5298</p>
                </li>
            </ul>
        </footer>
    );
}; 