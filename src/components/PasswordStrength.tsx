import React from 'react';
import { getPasswordStrength } from '../utils/validation';

interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const strength = getPasswordStrength(password);
  const percentage = (strength / 5) * 100;
  
  const getStrengthColor = () => {
    if (percentage <= 20) return '#e74c3c';
    if (percentage <= 40) return '#e67e22';
    if (percentage <= 60) return '#f1c40f';
    if (percentage <= 80) return '#2ecc71';
    return '#27ae60';
  };

  const getStrengthText = () => {
    if (percentage <= 20) return 'Very Weak';
    if (percentage <= 40) return 'Weak';
    if (percentage <= 60) return 'Medium';
    if (percentage <= 80) return 'Strong';
    return 'Very Strong';
  };

  return (
    <div className="password-strength">
      <div className="strength-bar">
        <div
          className="strength-bar-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: getStrengthColor(),
          }}
        />
      </div>
      <div className="strength-text" style={{ color: getStrengthColor() }}>
        Password Strength: {getStrengthText()}
      </div>
    </div>
  );
};

export default PasswordStrength;