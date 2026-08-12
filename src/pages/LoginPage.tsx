import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'white' }}>
            <h1 style={{ color: 'navy' }}>Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;