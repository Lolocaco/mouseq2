import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
            <h1 style={{ color: 'navy' }}>Welcome to the Ticket System</h1>
            <p style={{ color: 'orange' }}>Report your computer repairs or hardware issues easily!</p>
            <div>
                <Link to="/login" style={{ margin: '10px', color: 'navy' }}>Login</Link>
                <Link to="/register" style={{ margin: '10px', color: 'navy' }}>Register</Link>
                <Link to="/dashboard" style={{ margin: '10px', color: 'navy' }}>Dashboard</Link>
            </div>
        </div>
    );
};

export default HomePage;