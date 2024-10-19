import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('email');
    if (email === storedEmail) {
      setError('This email is already registered.');
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    navigate('/login');
  };

  return (
    <div className="container mx-auto py-12 flex justify-center">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input 
              type="text"
              id="username"
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
