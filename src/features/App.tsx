import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoanApplicationList from './components/loan/LoanApplicationList';
import CreateLoanApplication from './components/loan/CreateLoanApplication';
import UpdateLoanApplication from './components/loan/UpdateLoanApplication';
import LoanApplicationDetails from './components/loan/LoanApplicationDetails';
import TemplatesPage from './pages/TemplatesPage';
import UserPage from './pages/UserPage';
import UserProfileExport from './components/templates/UserProfileExport';
import DataImportPage from './pages/DataImportPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated, hasRole, logout } from './features/auth/authSlice';
import { RootState } from './app/store';
import PasswordReset from './pages/PasswordReset';
import RequestPasswordReset from './pages/RequestPasswordReset';
import VerifyResetToken from './pages/VerifyResetToken';
import LoginForm from './pages/login';
import CompanyLayout from './layouts/CompanyLayout/CompanyLayout';
import RegisterForm from './pages/Register';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAdmin = useSelector((state: RootState) => hasRole(state, 'ROLE_ADMIN'));

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    // <UserPage />
    // < >
 
    // <PasswordReset />
    // <Register />
    // <RequestPasswordReset />
    // <VerifyResetToken />
    // </>


    <Router>
      <div>
        {/* {isAuthenticated && (
          <div>
            {isAdmin ? <p>You are an admin.</p> : <p>You are not an admin.</p>}
            <button onClick={handleLogout}>Logout</button>
          </div>
        )} */}

        {/* Routes */}
        <Routes>
          {!isAuthenticated ? (
            <>
                       <Route path="*" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
   
            
         
            </>
          ) : (
            <>
              Authenticated routes

              <Route path='/' element= {<CompanyLayout />} >

              <Route path="/templates" element={<TemplatesPage />} />
              <Route path="/loans" element={<LoanApplicationList />} />
              <Route path="/loans/create" element={<CreateLoanApplication />} />
              <Route path="/loans/:id/edit" element={<UpdateLoanApplication />} />
              <Route path="/loans/:id" element={<LoanApplicationDetails />} />
              <Route path="/data-import" element={<DataImportPage />} />
              <Route path="/user-profile-export" element={<UserProfileExport />} /> 
              <Route path="/userManagement" element={<UserPage />} /> 
              {/* Redirect to default page for authenticated users */}
              <Route path="*" element={<Navigate to="/loans" />} />
              </Route>
            </>
          )}
        </Routes>
      </div>
    </Router>
  )
  }



export default App;