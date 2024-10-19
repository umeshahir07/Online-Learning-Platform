import { useState } from 'react';
import CourseCard from '../components/CourseCard';
import CourseFilter from '../components/CourseFilter';

const CourseCatalog = () => {
  const [filter, setFilter] = useState("");
  const courses = [
    { id: 1, title: "React Basics", category: "Web Development", difficulty: "Beginner" },
    { id: 2, title: "Advanced JavaScript", category: "Web Development", difficulty: "Advanced" },
  ];

  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Course Catalog</h1>
      <CourseFilter setFilter={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
