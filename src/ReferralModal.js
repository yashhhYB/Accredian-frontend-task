import React from 'react';
import './styles.css'; // Updated import path for styles

const ReferralModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Referral Modal</h2>
                <p className="modal-description">This is a simple referral modal with enhanced styles.</p>
                <button className="modal-close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ReferralModal;
