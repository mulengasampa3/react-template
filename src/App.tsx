import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout UI structure
import CompanyLayout from "./layouts/CompanyLayout/CompanyLayout";
import ClientLayout from "./layouts/ClientLayout/ClientLayout";

// Error Pages
import FourZeroFour from "./pages/404";

// Company Pages (Admin)
import CompanyDashboard from "./pages/companyPages/companyDashboard";

// User Pages
import MyAccount from "./pages/userPages/myAccount";
import Transactions from "./pages/userPages/transaction";
import UserDashboard from "./pages/userPages/userDashboard";

// Authentication Pages
import Register from "./pages/Auth/register";
import Login from "./pages/Auth/login";
import Otp from "./pages/Auth/otp";
import PasswordReset from "./pages/Auth/passwordReset";
import RequestPasswordReset from "./pages/Auth/requestPasswordReset";
import Auth from "./pages/Auth/Auth";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Admin Routes */}
                <Route path="/admin" element={<CompanyLayout />}>
                    <Route index element={<CompanyDashboard />} />
                </Route>

                {/* User Routes */}
                <Route path="/user" element={<ClientLayout />}>
                    <Route index element={<UserDashboard />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="my-account" element={<MyAccount />} />
                </Route>

                {/* Authentication Routes */}
                <Route path="/auth" element={<Auth />}>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="otp" element={<Otp />} />
                    <Route path="password-reset" element={<PasswordReset />} />
                    <Route path="request-password-reset" element={<RequestPasswordReset />} />
                </Route>

                {/* 404 Page */}
                <Route path="*" element={<FourZeroFour />} />
            </Routes>
        </Router>
    );
};

export default App;
