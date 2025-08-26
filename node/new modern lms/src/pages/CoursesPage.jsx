import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';

// Import initial data
import { initialCourses } from '../data';
import axios from 'axios';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    async function getCourses() {
        let res =await axios.get(import.meta.env.VITE_BACKEND_URL+'/courses')

        setCourses(res.data.courses);
    }
    getCourses()
  }, []);

  return <CourseList courses={courses} />;
};

export default CoursesPage;