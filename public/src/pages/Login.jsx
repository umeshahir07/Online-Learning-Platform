import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('email')?.trim();
    const storedPassword = localStorage.getItem('password')?.trim();

    // Trim input fields to avoid space-related issues
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Check if email and password match stored values
    if (trimmedEmail === storedEmail && trimmedPassword === storedPassword) {
      setIsAuthenticated(true);
      navigate('/home'); // Navigate to home after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container mx-auto py-12 flex justify-center">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input 
              type="email"
              id="email"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input 
              type="password"
              id="password"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
