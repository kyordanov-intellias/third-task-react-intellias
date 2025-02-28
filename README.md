# React Authentication Forms

A modern, responsive authentication system built with React and TypeScript, featuring Sign In and Sign Up forms with comprehensive validation and user feedback.

## Features

### Sign In Form
- Email/username and password fields
- Real-time validation
- Show/Hide password toggle
- Remember Me functionality which save the user data in the localStorage
- Success feedback
- Responsive design

### Sign Up Form
- Multi-step form process
- Username and email validation
- Password strength indicator
- Password matching validation
- Show/Hide password toggle
- Success feedback
- Step navigation
- Responsive design

### Validation Features
- Real-time field validation
- Email format validation
- Password strength requirements:
  - Minimum 8 characters
  - Must contain uppercase letter
  - Must contain lowercase letter
  - Must contain number
  - Must contain special character
- Username minimum length check
- Empty field validation
- Password matching validation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── SignIn.tsx
│   ├── SignUp.tsx
│   └── PasswordStrength.tsx
├── hooks/
│   ├── useSignInForm.ts
│   └── useSignUpForm.ts
├── styles/
│   └── auth.css
├── types/
│   └── auth.ts
├── utils/
│   └── validation.ts
├── App.tsx
└── main.tsx
```

## Technologies Used

- React
- TypeScript
- CSS
- Lucide React (for icons)

## Best Practices

- Reusable components
- Type safety with TypeScript
- Real-time validation
- Proper error handling
- Responsive design

## Security Considerations

- Password strength enforcement
- Secure password visibility toggle
- Form data validation
- Session management
- Local storage security