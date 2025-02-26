import React from 'react';
import ReactDOM from 'react-dom';
import ReferEarnPage from './ReferEarnPage';
import { CssBaseline } from '@mui/material'; // Assuming Material-UI is used

const App = () => (
    <React.StrictMode>
        <CssBaseline />
        <ReferEarnPage />
    </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
