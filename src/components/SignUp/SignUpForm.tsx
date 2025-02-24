import { FC } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useSignUpForm } from '../../hooks/useSignUpForm';
import PasswordStrength from '../PasswordStrength';

export const SignUpForm: FC = () => {
    const {
        formData,
        errors,
        currentStep,
        showPassword,
        showConfirmPassword,
        isSuccess,
        setShowPassword,
        setShowConfirmPassword,
        handleChange,
        handleNext,
        handlePrevious,
        handleSubmit
    } = useSignUpForm();

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            {currentStep === 1 && (
                <>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                        />
                        {errors.username && <span className="error-message">{errors.username}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                </>
            )}

            {currentStep === 2 && (
                <>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.password && <span className="error-message">{errors.password}</span>}
                        <PasswordStrength password={formData.password} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                    </div>
                </>
            )}

            <div className="step-navigation">
                {currentStep > 1 && (
                    <button type="button" className="step-button" onClick={handlePrevious}>
                        Previous
                    </button>
                )}
                {currentStep < 2 ? (
                    <button type="button" className="step-button" onClick={handleNext}>
                        Next
                    </button>
                ) : (
                    <button type="submit" className="step-button">
                        Sign Up
                    </button>
                )}
            </div>

            {isSuccess && (
                <div className="success-message">
                    Successfully signed up!
                </div>
            )}
        </form>
    );
};