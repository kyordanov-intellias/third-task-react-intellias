import { FC } from 'react';
import { SignInProps } from '../../types/auth';
import { SignInForm } from './SignInForm';
import '../../styles/auth.css';

const SignIn: FC<SignInProps> = ({ onToggleForm }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Sign In</h1>
        </div>
        <SignInForm />
        <a href="#" className="auth-link" onClick={onToggleForm}>
          Don't have an account? Sign Up
        </a>
      </div>
    </div>
  );
};

export default SignIn;