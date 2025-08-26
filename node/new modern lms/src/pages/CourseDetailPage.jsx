import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail from '../components/CourseDetail';

// Import initial data
import { initialCourses, initialStudents } from '../data';
import axios from 'axios';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // In a real app, these would be API calls
    // const foundCourse = initialCourses.find(c => c.id === parseInt(id));
    // setCourse(foundCourse);
    async function getCourse() {
      let res =await axios.get(import.meta.env.VITE_BACKEND_URL+'/courses/'+id)
      let studentRes =await axios.get(import.meta.env.VITE_BACKEND_URL+'/students')
      setCourse(res.data.course);
      setStudents(studentRes.data.students);

    }
    getCourse()
  }, [id]);

  return <CourseDetail course={course} students={students} />;
};

export default CourseDetailPage;