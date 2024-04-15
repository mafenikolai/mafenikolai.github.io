import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            {/* <h1 className={styles.title}>Mafê e Nikolai</h1> */}
            <div className={styles.content}>
                <img 
                    src={require("../../assets/about/about.png")} 
                    alt="about" 
                    className={styles.aboutImage} 
                />
                <ul className={styles.aboutItems}>
                <p className={styles.phrase} >"O amor humano, o amor aqui embaixo na terra, quando verdadeiro, nos ajuda a saborear o amor divino."</p>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
        
                            <div>
                                <h3>Queridos amigos e familiares,</h3>
                                <p>
                                    É uma alegria imensa poder celebrar o momento mais importante de nossas vidas com pessoas que fazem parte de nossa história. 
                                </p>
                                <p>
                                    Esperamos vocês!
                                </p>
                            </div>
                        </div>
                    </li>
                    
                   
                </ul>
            </div>
        </section>
    );
}