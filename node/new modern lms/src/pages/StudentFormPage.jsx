import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

// Import initial data
import { initialStudents } from '../data';
import axios from 'axios';

const StudentFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [students, setStudents] = useState([]);
  const isEdit = !!id;

  useEffect(() => {
    // In a real app, these would be API calls
    setStudents(initialStudents);
    if (isEdit) {
      const foundStudent = initialStudents.find(s => s.id === parseInt(id));
      setStudent(foundStudent);
    }
  }, [id, isEdit]);

  const handleSubmit =async (studentData) => {
    if (isEdit) {
      // Update existing student
      const updatedStudents = students.map(s => 
        s.id === parseInt(id) ? { ...s, ...studentData } : s
      );
      setStudents(updatedStudents);
      // In a real app, this would be an API call to update the student
    } else {
      // Add new student
      const newStudent = {
        ...studentData,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      };
      await axios.post('http://localhost:3000/students',newStudent)
      console.log('data added successfully')
      // setStudents([...students, newStudent]);
      // In a real app, this would be an API call to create the student
    }
    navigate('/students');
  };

  return <StudentForm student={student} onSubmit={handleSubmit} isEdit={isEdit} />;
};

export default StudentFormPage;