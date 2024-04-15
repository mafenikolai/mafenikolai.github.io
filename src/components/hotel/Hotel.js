import React from "react";
import styles from "./Hotel.module.css";
import hotel from "../../data/hotel.json";

export const Hotel = () => {
    return (
        <section className={styles.container} id="hotel">
            <h2 className={styles.title}>Hospedagem</h2>
            <h3 className={styles.description}>Para a praticidade de nossos convidados que não são de Curitiba, fechamos parceria de hospedagem com desconto nestes hotéis</h3>
            <div className={styles.content}>
                {hotel.map((hot, id) => 
                <li key={id} className={styles.item}>
                    <div className={styles.hotelInfo}>
                        <h3 className={styles.hotelName}>{hot.name}</h3>
                        <p className={styles.hotelComplement}>{hot.complement}</p>
                    </div>
                    <p className={styles.name}>{hot.address}</p>
                    <p className={styles.telefone}> Telefone para reservas: {hot.contact}</p>
                    <p className={styles.valores}>Valores:</p>

                    {hot.price.map((valor, id) => 
                        <li key={id} className={styles.prices}>
                            <div className={styles.pricesInfo}>
                                <p className={styles.pricesDescription}>{valor.descricao}</p>
                                <p className={styles.pricesValue}>{valor.preco}</p>
                            </div>
                        </li>
                    )}

                </li>
                )}
            </div>
        </section>
    );
}