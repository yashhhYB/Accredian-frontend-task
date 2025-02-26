import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles.css'; // Import styles

const ReferEarnPage = () => {
    return (
        <div className="refer-earn-container">
            <Header />
            <h2 className="title">Welcome to the Refer Earn App</h2>
            <img className="refer-earn-image" src="path/to/image.jpg" alt="Refer Earn" />
            <button className="open-modal-button">Open Modal</button>
            <Footer />
        </div>
    );
};

export default ReferEarnPage;
