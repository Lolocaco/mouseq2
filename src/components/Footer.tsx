import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: 'navy', color: 'white', padding: '10px', textAlign: 'center' }}>
            <p>© {new Date().getFullYear()} Ticket System. All rights reserved.</p>
            <p>For support, contact: support@example.com</p>
        </footer>
    );
};

export default Footer;