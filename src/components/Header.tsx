import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ backgroundColor: 'navy', color: 'white', padding: '10px' }}>
            <h1 style={{ margin: 0 }}>Ticket System</h1>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '15px' }}>
                    <li><a href="/" style={{ color: 'orange', textDecoration: 'none' }}>Home</a></li>
                    <li><a href="/login" style={{ color: 'orange', textDecoration: 'none' }}>Login</a></li>
                    <li><a href="/register" style={{ color: 'orange', textDecoration: 'none' }}>Register</a></li>
                    <li><a href="/dashboard" style={{ color: 'orange', textDecoration: 'none' }}>Dashboard</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;