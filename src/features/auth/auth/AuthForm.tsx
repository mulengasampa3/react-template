// src/components/AuthForm.tsx
import React, { useState } from 'react';

interface AuthFormProps {
  onSubmit: (data: { email: string; password?: string; token?: string; newPassword?: string; name?: string }) => void;
  isPasswordReset?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, isPasswordReset = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adjust the submission data based on the form type
    if (isPasswordReset) {
      onSubmit({ email, token, newPassword });
    } else {
      onSubmit({ email, password, name });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      {isPasswordReset ? (
        <>
          <input type="text" placeholder="Token" value={token} onChange={(e) => setToken(e.target.value)} required />
          <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </>
      ) : (
        <>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;
