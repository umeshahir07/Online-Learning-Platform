import CourseCard from '../components/CourseCard';

const Home = ({ courses }) => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Featured Courses</h1>
        <p className="mb-8 text-gray-600">Discover the best courses for your learning journey</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
