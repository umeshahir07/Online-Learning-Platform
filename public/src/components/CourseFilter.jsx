const CourseFilter = ({ setFilter }) => {
    return (
      <div className="mb-8">
        <input 
          type="text" 
          className="border border-gray-300 rounded p-3 w-full" 
          placeholder="Search courses..." 
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    );
  };
  
  export default CourseFilter;
  