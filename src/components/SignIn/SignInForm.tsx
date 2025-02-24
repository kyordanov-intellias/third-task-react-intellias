import { Eye, EyeOff } from 'lucide-react';
import { useSignInForm } from '../../hooks/useSignInForm';
import { FC } from 'react';

export const SignInForm: FC = () => {
    const {
        formData,
        errors,
        showPassword,
        isSuccess,
        setShowPassword,
        handleChange,
        handleSubmit
    } = useSignInForm();

    return (
        <form onSubmit={handleSubmit} className="auth-form">
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
            </div>

            <div className="remember-me">
                <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit" className="auth-button">
                Sign In
            </button>

            {isSuccess && (
                <div className="success-message">
                    Successfully signed in!
                </div>
            )}
        </form>
    );
};