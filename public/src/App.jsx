import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CourseCatalog from './pages/CourseCatalog';
import UserDashboard from './pages/UserDashboard';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Auth state

  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", description: "Learn React from scratch.", category: "Web Development" },
    { id: 2, title: "Python for Data Science", description: "Intro to Python and data analysis.", category: "Data Science" }
  ]);

  const addCourse = (newCourse) => {
    setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
  };

  const editCourse = (updatedCourse) => {
    setCourses(courses.map(course => (course.id === updatedCourse.id ? updatedCourse : course)));
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Pass authentication state to Navbar */}
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected Home route */}
            <Route
              path="/home"
              element={isAuthenticated ? <Home courses={courses} /> : <Navigate to="/login" />}
            />

            {/* Protected Admin route */}
            <Route
              path="/admin"
              element={isAuthenticated ? (
                <Admin courses={courses} addCourse={addCourse} editCourse={editCourse} deleteCourse={deleteCourse} />
              ) : (
                <Navigate to="/login" />
              )}
            />

            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/catalog" element={<CourseCatalog />} />
            <Route path="/course/:id" element={<CourseDetail />} />

            {/* Protected Dashboard route */}
            <Route
              path="/dashboard"
              element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
