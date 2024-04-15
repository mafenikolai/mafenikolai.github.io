import React from "react";
import styles from "./Evento.module.css";
import evento from "../../data/evento.json";

export const Evento = () => {
    return (
        <section className={styles.container} id="evento">
            <h2 className={styles.title}>Evento</h2>
            <div className={styles.content}>
                {evento.map((eventoItem, id) => 
                <li key={id} className={styles.eventoItem}>
                    <h3>{`${eventoItem.type}`}</h3>
                    <p className={styles.eventoItemDate}>
                        {`${eventoItem.startDate}`}
                    </p>
                    <p className={styles.eventoItemAddress}>
                        {eventoItem.venue} {eventoItem.address}
                    </p>
                </li>
                )}
            </div>
        </section>
    );
}