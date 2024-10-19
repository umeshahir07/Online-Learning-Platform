import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <p className="text-sm text-gray-500 mb-4">{course.category}</p>
        <Link to={`/course/${course.id}`} className="text-blue-600 hover:underline">View Course</Link>
      </div>
    </div>
  );
};

export default CourseCard;
