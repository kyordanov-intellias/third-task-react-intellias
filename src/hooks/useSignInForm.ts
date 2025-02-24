import { useState } from 'react';
import { SignInFormData, SignInErrors } from '../types/auth';
import { validateEmail } from '../utils/validation';

export const useSignInForm = () => {
    const [formData, setFormData] = useState<SignInFormData>({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState<SignInErrors>({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'email') {
            setErrors(prev => ({
                ...prev,
                email: value && !validateEmail(value) ? 'Please enter a valid email' : ''
            }));
        }
        if (name === 'password') {
            setErrors(prev => ({
                ...prev,
                password: !value ? 'Password is required' : ''
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            email: !formData.email ? 'Email is required' :
                !validateEmail(formData.email) ? 'Please enter a valid email' : '',
            password: !formData.password ? 'Password is required' : ''
        };

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password) {
            if (formData.rememberMe) {
                localStorage.setItem('userEmail', formData.email);
            } else {
                localStorage.removeItem('userEmail');
            }

            setIsSuccess(true);
            setTimeout(() => {
                setFormData({ email: '', password: '', rememberMe: false });
                setIsSuccess(false);
            }, 3000);
        }
    };

    return {
        formData,
        errors,
        showPassword,
        isSuccess,
        setShowPassword,
        handleChange,
        handleSubmit
    };
};