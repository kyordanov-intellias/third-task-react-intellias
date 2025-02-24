import { FC } from 'react';
import { SignUpProps } from '../../types/auth';
import { SignUpForm } from './SignUpForm';
import '../../styles/auth.css';
import { useSignUpForm } from '../../hooks/useSignUpForm';

const SignUp: FC<SignUpProps> = ({ onToggleForm }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Sign Up</h1>
          <div className="step-indicator">
            <div className={`step-dot ${useSignUpForm().currentStep === 1 ? 'active' : ''}`} />
            <div className={`step-dot ${useSignUpForm().currentStep === 2 ? 'active' : ''}`} />
          </div>
        </div>

        <SignUpForm />


        <a href="#" className="auth-link" onClick={onToggleForm}>
          Already have an account? Sign In
        </a>
      </div>
    </div>
  );
};

export default SignUp;