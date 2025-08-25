import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail from '../components/CourseDetail';

// Import initial data
import { initialCourses, initialStudents } from '../data';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // In a real app, these would be API calls
    const foundCourse = initialCourses.find(c => c.id === parseInt(id));
    setCourse(foundCourse);
    setStudents(initialStudents);
  }, [id]);

  return <CourseDetail course={course} students={students} />;
};

export default CourseDetailPage;