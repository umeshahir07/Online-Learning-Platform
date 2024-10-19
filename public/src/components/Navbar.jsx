import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // For handling mobile menu

  const handleLogout = () => {
    // Do not remove the data from localStorage, just set isAuthenticated to false
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to the login page
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link to="/home" className="text-3xl font-extrabold">Online Learning Platform</Link>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/admin" className="hover:text-gray-200 font-bold text-lg">Admin</Link>
          <Link to="/home" className="hover:text-gray-200 font-bold text-lg">Home</Link>
          <Link to="/catalog" className="hover:text-gray-200 font-bold text-lg">Courses</Link>
          <Link to="/dashboard" className="hover:text-gray-200 font-bold text-lg">Dashboard</Link>

          {!isAuthenticated ? (
            <>
              <Link to="/login" className="hover:text-gray-200 text-lg font-bold text-black">Login</Link>
              <Link to="/signup" className="hover:text-gray-200 text-lg font-bold text-black">Signup</Link>
            </>
          ) : (
            <>
              <span className=" text-blue-600 text-xl font-bold border rounded-full p-1 px-3 bg-white">
                {username ? username.charAt(0).toUpperCase() : ''}
              </span>
              <button onClick={handleLogout} className="text-xl underline">Logout</button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/admin" className="hover:text-gray-200 text-lg">Admin</Link>
            <Link to="/home" className="hover:text-gray-200 text-lg">Home</Link>
            <Link to="/catalog" className="hover:text-gray-200 text-lg">Courses</Link>
            <Link to="/dashboard" className="hover:text-gray-200 text-lg">Dashboard</Link>

            {!isAuthenticated ? (
              <>
                <Link to="/login" className="hover:text-gray-200 text-lg">Login</Link>
                <Link to="/signup" className="hover:text-gray-200 text-lg">Signup</Link>
              </>
            ) : (
              <>
                <span className="hover:text-gray-200">
                  {username ? username.charAt(0).toUpperCase() : ''}
                </span>
                <button onClick={handleLogout} className="hover:text-gray-200">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
