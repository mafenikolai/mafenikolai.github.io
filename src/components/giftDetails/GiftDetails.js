import React from 'react';
import { QrCodePix } from 'qrcode-pix';
import {useEffect, useState} from 'react'
import styles from './GiftDetails.module.css';
import CloseIcon from "../../assets/nav/close.svg";

export const GiftDetails = ({ gift, onClose }) => {
    const [qrCode, setQrCode] = useState('');
    const [rawPix, setRawPix] = useState('');

    useEffect(() => {
        async function generateDynamicPix() {
            const qrCodePix = QrCodePix({
                version: '01',
                key: '+5541998358181',
                name: 'Maria Fernanda Azolin',
                city: 'CURITIBA',
                cep: '82320120',
                value: gift.value,
            });

            const rawPixStr = qrCodePix.payload();
            const qrCodeBase64 = await qrCodePix.base64();

            setRawPix(rawPixStr);
            setQrCode(qrCodeBase64);
        }

        void generateDynamicPix();
    }, [gift.value])

    return (
        <div className={styles.popup}>
            <div className={styles.popupContainer}>
                <nav className={styles.navbar}>
                    <img
                        src={CloseIcon}
                        alt="close" 
                        onClick={onClose}
                    />
                </nav>

                <div className={styles.popupContent}>
                    <div className={styles.title}>
                        {
                            gift.icon !== "" && 
                            <img 
                                src={require(`../../assets/gifts/cards/${gift.icon}`)} 
                                alt={gift.icon}
                                className={styles.icon}
                            />
                        }
                        <div className={styles.giftValue}>
                            <h3 className={styles.giftValue}>{gift.name}</h3>
                            <p className={styles.giftValue}> R$ {gift.value}</p>
                        </div>
                    </div>

                    <div className={styles.instructions}>
                        <p className={styles.instructions}>Para realizar o pagamento, escaneie o QR code com seu app do banco, ou copie o código:</p>

                        <div className={styles.qrCodeContainer}>
                            <img src={qrCode} alt={'QR Code PIX'} className={styles.qrCode}/>
                        </div>
                    
                        <div className={styles.rawPixContainer}>
                           <p className={styles.rawPix}>
                            {rawPix}
                           </p> 
                        </div>
                            
                    </div>
                </div>

            </div>
        </div>
    );
}