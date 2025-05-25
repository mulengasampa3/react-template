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

import ModalPage from "./pages/companyPages/modalComponent";
import StagesTemplate from "./pages/companyPages/stagesTemplate";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                 {/* ==========1. USER-APP PAGES========= */}
                <Route path="user-app/" element={<ClientLayout />}>
                    <Route index element={<UserDashboard />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="my-account" element={<MyAccount />} />
                </Route>

                 {/* =========2. DASHBOARD-APP PAGES========= */}
                <Route path="dashboard-app/" element={<CompanyLayout />}>
                    <Route index element={<CompanyDashboard />} />

                    {/* Atom Components */}
                    <Route path='atom-components/'></Route>

                    {/* Molecule Components */}
                    <Route path='molecule-components/'></Route>

                    {/* Organism Components */}
                    <Route path='organism-components/'>
                        <Route path="modals" element={<ModalPage />} />
                    </Route>

                    {/* Template Components */}
                    <Route path='template-components/'>
                        <Route path="tab-template" element={<StagesTemplate />} />
                    </Route>

                    {/* Pages */}
                    <Route path='pages-components/'></Route>
                </Route>

                {/* =========3. AUTH-PAGES========= */}
                <Route path="/auth" element={<Auth />}>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="otp" element={<Otp />} />
                    <Route path="password-reset" element={<PasswordReset />} />
                    <Route path="request-password-reset" element={<RequestPasswordReset />} />
                </Route>

                {/* =========4. WILDCARD-PAGES========= */}
                <Route path="*" element={<FourZeroFour />} />

                {/* =========5. WEBSITE and LANDING PAGES-========= */}
                {/* Define routes for your landing pages here */}
            </Routes>
        </Router>
    );
};

export default App;
