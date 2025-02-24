import { useState } from 'react';
import { SignUpFormData, SignUpErrors } from '../types/auth';
import { validateEmail, validatePassword, validateUsername } from '../utils/validation';

export const useSignUpForm = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState<SignUpErrors>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateStep1 = () => {
        const newErrors = {
            username: !formData.username ? 'Username is required' :
                !validateUsername(formData.username) ? 'Username must be at least 3 characters' : '',
            email: !formData.email ? 'Email is required' :
                !validateEmail(formData.email) ? 'Please enter a valid email' : ''
        };

        setErrors(prev => ({ ...prev, ...newErrors }));
        return !newErrors.username && !newErrors.email;
    };

    const validateStep2 = () => {
        const newErrors = {
            password: !formData.password ? 'Password is required' :
                !validatePassword(formData.password) ? 'Password must be at least 8 characters with uppercase, lowercase, number and special character' : '',
            confirmPassword: !formData.confirmPassword ? 'Please confirm your password' :
                formData.password !== formData.confirmPassword ? 'Passwords do not match' : ''
        };

        setErrors(prev => ({ ...prev, ...newErrors }));
        return !newErrors.password && !newErrors.confirmPassword;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        switch (name) {
            case 'username':
                setErrors(prev => ({
                    ...prev,
                    username: value && !validateUsername(value) ? 'Username must be at least 3 characters' : ''
                }));
                break;
            case 'email':
                setErrors(prev => ({
                    ...prev,
                    email: value && !validateEmail(value) ? 'Please enter a valid email' : ''
                }));
                break;
            case 'password':
                setErrors(prev => ({
                    ...prev,
                    password: value && !validatePassword(value) ? 'Password must be at least 8 characters with uppercase, lowercase, number and special character' : ''
                }));
                break;
            case 'confirmPassword':
                setErrors(prev => ({
                    ...prev,
                    confirmPassword: value !== formData.password ? 'Passwords do not match' : ''
                }));
                break;
        }
    };

    const handleNext = () => {
        if (currentStep === 1 && validateStep1()) {
            setCurrentStep(2);
        }
    };

    const handlePrevious = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (currentStep === 2 && validateStep2()) {
            sessionStorage.setItem('userData', JSON.stringify(formData));

            setIsSuccess(true);
            setTimeout(() => {
                setFormData({ username: '', email: '', password: '', confirmPassword: '' });
                setCurrentStep(1);
                setIsSuccess(false);
            }, 3000);
        }
    };

    return {
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
    };
};