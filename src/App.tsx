import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout UI structure
import CompanyLayout from './layouts/CompanyLayout/CompanyLayout';
import ClientLayout from './layouts/ClientLayout/ClientLayout';

// Error Pages
import FourZeroFour from './pages/404';

// Company Pages
import CompanyDashboard from './pages/companyPages/companyDashboard';

// userPages
import MyAccount from './pages/userPages/myAccount';
import Transactions from './pages/userPages/transaction';
import UserDashboard from './pages/userPages/userDashboard';

// Authentication Pages
import Register from './pages/Auth/register';
import Login from './pages/Auth/login';
import Otp from './pages/Auth/otp';
import PasswordReset from './pages/Auth/passwordReset';
import RequestPasswordReset from './pages/Auth/requestPasswordReset';
import Auth from './pages/Auth/Auth';


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* applies to the Company view Only */}
                <Route path="/" element={<CompanyLayout />}>
                    <Route index element={<CompanyDashboard />} />
                </Route>

                {/* applies to the clientele view */}
                <Route path="/" element={<ClientLayout />}>
                    <Route path="userDashboard" element={<UserDashboard />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="my-account" element={<MyAccount />} />
                </Route>

                {/* applies to the authentication view */}
                <Route path="auth" element={<Auth />} />
                <Route path="otp" element={<Otp />} />
                <Route path="password-reset" element={<PasswordReset />} />
                <Route path="request-password-reset" element={<RequestPasswordReset />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                
                {/* 404 page */}
                <Route path="*" element={<FourZeroFour />} />
            </Routes>
        </Router>
    );
};

export default App;