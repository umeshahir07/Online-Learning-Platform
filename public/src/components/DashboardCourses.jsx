const DashboardCourses = ({ courses }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600">Progress: {course.progress}%</p>
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">Resume</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default DashboardCourses;
  