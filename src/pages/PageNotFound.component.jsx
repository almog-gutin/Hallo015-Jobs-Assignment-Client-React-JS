import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();

    const redirectToHomepage = () => navigate('/');

    return (
        <main className="page-not-found">
            <h1>404</h1>

            <button onClick={redirectToHomepage}>Go To Home</button>
        </main>
    );
};

export default PageNotFound;
