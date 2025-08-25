import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CourseForm from '../components/CourseForm';

// Import initial data
import { initialCourses } from '../data';

const CourseFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [courses, setCourses] = useState([]);
  const isEdit = !!id;

  useEffect(() => {
    // In a real app, these would be API calls
    setCourses(initialCourses);
    if (isEdit) {
      const foundCourse = initialCourses.find(c => c.id === parseInt(id));
      setCourse(foundCourse);
    }
  }, [id, isEdit]);

  const handleSubmit = (courseData) => {
    if (isEdit) {
      // Update existing course
      const updatedCourses = courses.map(c => 
        c.id === parseInt(id) ? { ...c, ...courseData } : c
      );
      setCourses(updatedCourses);
      // In a real app, this would be an API call to update the course
    } else {
      // Add new course
      const newCourse = {
        ...courseData,
        id: Math.max(...courses.map(c => c.id)) + 1,
        enrolled: 0
      };
      setCourses([...courses, newCourse]);
      // In a real app, this would be an API call to create the course
    }
    navigate('/courses');
  };

  return <CourseForm course={course} onSubmit={handleSubmit} isEdit={isEdit} />;
};

export default CourseFormPage;