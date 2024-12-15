import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; // Import the CSS file for styling

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Redirect to the homepage
    };

    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
                <button className="not-found-button" onClick={handleGoHome}>
                    Go to Homepage
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
