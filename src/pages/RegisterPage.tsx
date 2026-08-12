import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const RegisterPage: React.FC = () => {
    return (
        <div className="register-page">
            <h1>Register</h1>
            <RegistrationForm />
        </div>
    );
};

export default RegisterPage;