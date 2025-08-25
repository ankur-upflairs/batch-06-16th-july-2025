import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';

// Import initial data
import { initialCourses } from '../data';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setCourses(initialCourses);
  }, []);

  return <CourseList courses={courses} />;
};

export default CoursesPage;