import DashboardCourses from '../components/DashboardCourses';

const UserDashboard = () => {
  const enrolledCourses = [
    { id: 1, title: "React Basics", progress: 50 },
    { id: 2, title: "Python for Data Science", progress: 75 }
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">My Courses</h1>
      <DashboardCourses courses={enrolledCourses} />
    </div>
  );
};

export default UserDashboard;
