import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TemplatesPage from '../pages/companyPages/stagesTemplate';
import UserPage from '../pages/userPages/myAccount';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated, hasRole, logout } from './auth/authSlice';
import { RootState } from '../app/store';
import PasswordReset from '../pages/Auth/passwordReset';
import RequestPasswordReset from '../pages/Auth/requestPasswordReset';
import VerifyResetToken from '../pages/Auth/otp';
import LoginForm from '../pages/Auth/login';
import CompanyLayout from '../layouts/CompanyLayout/CompanyLayout';
import Register from '../pages/Auth/register';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* ==========1. USER-APP PAGES========= */}
                <Route path="/my-account" element={<UserPage />} />

                {/* =========2. DASHBOARD-APP PAGES========= */}
                <Route path="/templates" element={<TemplatesPage />} />

                {/* =========3. AUTH-PAGES========= */}
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
                <Route path="/request-password-reset" element={<RequestPasswordReset />} />
                <Route path="/verify-reset-token" element={<VerifyResetToken />} />
                <Route path="/password-reset" element={<PasswordReset />} />

                {/* =========4. WILDCARD-PAGES========= */}
                {/* You might add a catch-all route here, e.g., <Route path="*" element={<NotFoundPage />} /> */}

                {/* =========5. WEBSITE and LANDING PAGES-========= */}
                {/* Define routes for your landing pages here */}
            </Routes>
        </Router>
    )
}
export default App;