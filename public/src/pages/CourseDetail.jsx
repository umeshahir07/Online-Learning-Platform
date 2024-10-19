import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CourseDetail = () => {
  const { id } = useParams();  // Get the course ID from the URL
  const [isEnrolled, setIsEnrolled] = useState(false);

  // For simplicity, static course data
  const course = {
    id: id,
    title: "React Basics",
    description: "Learn the fundamentals of React and how to build modern web applications.",
    instructor: "John Doe",
    duration: "5 hours",
    category: "Web Development",
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
    // Logic to store enrolled course in localStorage or state management
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg mb-6">{course.description}</p>
      <div className="mb-4">
        <strong>Instructor:</strong> <span>{course.instructor}</span>
      </div>
      <div className="mb-4">
        <strong>Duration:</strong> <span>{course.duration}</span>
      </div>
      <div className="mb-8">
        <strong>Category:</strong> <span>{course.category}</span>
      </div>
      
      {!isEnrolled ? (
        <button 
          onClick={handleEnroll} 
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Enroll Now
        </button>
      ) : (
        <p className="text-green-500 font-semibold">You are enrolled in this course!</p>
      )}
    </div>
  );
};

export default CourseDetail;
