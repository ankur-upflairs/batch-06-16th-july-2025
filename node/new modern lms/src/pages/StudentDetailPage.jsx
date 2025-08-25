import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentDetail from '../components/StudentDetail';
import axios from 'axios';
// Import initial data
import { initialStudents, initialCourses } from '../data';

const StudentDetailPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // In a real app, these would be API calls
    // const foundStudent = initialStudents.find(s => s.id === parseInt(id));
     async function getData() {
    let res = await  axios.get('http://localhost:3000/students/'+id)
      // console.log(res.data.students)
      setStudent(res.data.student);
    }
    getData()
    setCourses(initialCourses);
  }, [id]);

  return <StudentDetail student={student} courses={courses} />;
};

export default StudentDetailPage;