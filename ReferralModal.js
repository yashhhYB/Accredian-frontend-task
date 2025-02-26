import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material'; // Assuming Material-UI is used

const ReferralModal = ({ open, onClose }) => {
    const [referrerName, setReferrerName] = useState('');
    const [referrerEmail, setReferrerEmail] = useState('');
    const [refereeName, setRefereeName] = useState('');
    const [refereeEmail, setRefereeEmail] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Simple validation
        if (!referrerName) newErrors.referrerName = 'Referrer name is required';
        if (!referrerEmail) newErrors.referrerEmail = 'Referrer email is required';
        if (!refereeName) newErrors.refereeName = 'Referee name is required';
        if (!refereeEmail) newErrors.refereeEmail = 'Referee email is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Implement form submission logic here
        console.log({ referrerName, referrerEmail, refereeName, refereeEmail });
        onClose(); // Close modal after submission
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal-content">
                <h2>Referral Form</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Referrer Name"
                        value={referrerName}
                        onChange={(e) => setReferrerName(e.target.value)}
                        error={!!errors.referrerName}
                        helperText={errors.referrerName}
                        required
                    />
                    <TextField
                        label="Referrer Email"
                        value={referrerEmail}
                        onChange={(e) => setReferrerEmail(e.target.value)}
                        error={!!errors.referrerEmail}
                        helperText={errors.referrerEmail}
                        required
                    />
                    <TextField
                        label="Referee Name"
                        value={refereeName}
                        onChange={(e) => setRefereeName(e.target.value)}
                        error={!!errors.refereeName}
                        helperText={errors.refereeName}
                        required
                    />
                    <TextField
                        label="Referee Email"
                        value={refereeEmail}
                        onChange={(e) => setRefereeEmail(e.target.value)}
                        error={!!errors.refereeEmail}
                        helperText={errors.refereeEmail}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        </Modal>
    );
};

export default ReferralModal;
