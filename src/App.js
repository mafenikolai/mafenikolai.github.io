import React, { useState } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Evento } from './components/evento/Evento';
import { Hotel } from './components/hotel/Hotel';
import { Gifts } from './components/gifts/Gifts';
import { GiftDetails } from './components/giftDetails/GiftDetails';
import { Contact } from './components/contact/Contact';
import gifts from "./data/gifts.json";
import './index.css'

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedGift, setSelectedGift] = useState(null);
    const handleGiftClick = (gift) => {
        setSelectedGift(gift);
        setShowPopup(true);
        document.body.style.overflow = "hidden";
    };
    const handleClosePopup = () => {
        setShowPopup(false);
        setSelectedGift(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <Evento />
            <Gifts gifts={gifts} onGiftClick={handleGiftClick} />
            <Hotel />
            <Contact />
            {showPopup && (
                <GiftDetails gift={selectedGift} onClose={handleClosePopup} />
            )}
        
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </div>
    );
}

export default App;