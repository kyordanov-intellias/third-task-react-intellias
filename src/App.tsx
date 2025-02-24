import { useState } from 'react';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import './styles/auth.css';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="app">
      <div className="animated-background"></div>
      {isSignIn ? (
        <SignIn onToggleForm={toggleForm} />
      ) : (
        <SignUp onToggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;