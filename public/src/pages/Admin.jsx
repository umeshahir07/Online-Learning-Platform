import React, { useState } from 'react';

const Admin = ({ courses, addCourse, editCourse, deleteCourse }) => {
  const [courseData, setCourseData] = useState({ title: '', description: '', category: '', id: null });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editCourse(courseData);
    } else {
      addCourse(courseData);
    }
    setCourseData({ title: '', description: '', category: '', id: null });
    setIsEditing(false);
  };

  const handleEdit = (course) => {
    setCourseData(course);
    setIsEditing(true);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">{isEditing ? "Edit Course" : "Add Course"}</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          name="title"
          value={courseData.title}
          onChange={handleChange}
          placeholder="Course Title"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="description"
          value={courseData.description}
          onChange={handleChange}
          placeholder="Course Description"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          name="category"
          value={courseData.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2 mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {isEditing ? "Update Course" : "Add Course"}
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Existing Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="border p-4 mb-4">
            <h3 className="text-lg font-bold">{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Category:</strong> {course.category}</p>
            <button onClick={() => handleEdit(course)} className="text-blue-500 mr-4">Edit</button>
            <button onClick={() => deleteCourse(course.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
