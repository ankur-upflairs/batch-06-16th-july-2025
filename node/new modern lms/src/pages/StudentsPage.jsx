import React, { useState, useEffect } from 'react';
import StudentList from '../components/StudentList';
import axios from 'axios';
// Import initial data
import { initialStudents } from '../data';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    async function getData() {
    let res = await  axios.get('http://localhost:3000/students')
      // console.log(res.data.students)
      setStudents(res.data.students);
    }
    getData()
  }, []);

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
    // In a real app, this would be an API call to delete the student
  };

  return <StudentList students={students} onDeleteStudent={handleDeleteStudent} />;
};

export default StudentsPage;