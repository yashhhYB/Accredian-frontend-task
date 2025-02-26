import React, { useState } from 'react';
import './styles.css'; // Importing the styles

import ReferralModal from './ReferralModal';
import { Button } from '@mui/material'; // Assuming Material-UI is used

const ReferEarnPage = () => {
    // State for modal visibility

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="hero-section">
            <h1 className="hero-title">Refer & Earn</h1>

            <Button variant="contained" color="primary" onClick={handleOpenModal}>
                Refer Now
            </Button>
            <ReferralModal open={modalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ReferEarnPage;
