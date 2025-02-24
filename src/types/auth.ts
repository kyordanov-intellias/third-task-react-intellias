export interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  rememberMe?: boolean;
}

export interface ValidationErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface AuthState {
  formData: FormData;
  errors: ValidationErrors;
  currentStep: number;
  showPassword: boolean;
  showConfirmPassword: boolean;
  isSubmitting: boolean;
  isSuccess: boolean;
}

export interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignInErrors {
  email: string;
  password: string;
}

export interface SignInProps {
  onToggleForm: () => void;
}

export interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpErrors {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpProps {
  onToggleForm: () => void;
}