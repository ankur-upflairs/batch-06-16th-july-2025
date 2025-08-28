import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AssignmentForm from '../components/AssignmentForm';
import { initialAssignments, initialCourses } from '../data';
import axios from 'axios';

const AssignmentFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [courses,setCourses] = useState(initialCourses);
  const isEdit = !!id;
  useEffect(()=>{
    async function getData() {
    let resData = await  axios.get(import.meta.env.VITE_BACKEND_URL+'/courses')
      setCourses(resData.data.courses)
      // console.log(res.data.students)
      
    }
    getData()
  },[])
  useEffect(() => {
    if (isEdit) {
      const assignmentId = parseInt(id);
      const foundAssignment = initialAssignments.find(a => a.id === assignmentId);
      setAssignment(foundAssignment);
    }
  }, [id, isEdit]);

  const handleSubmit =async (formData) => {
    if (isEdit) {
      // In a real app, this would update the assignment in the database
      console.log('Updating assignment:', { ...assignment, ...formData });
    } else {
      // In a real app, this would add a new assignment to the database
      await axios.post(import.meta.env.VITE_BACKEND_URL+'/assignments',formData)
      // const newAssignment = {
      //   ...formData,
      //   id: Math.max(...initialAssignments.map(a => a.id)) + 1,
      //   createdAt: new Date().toISOString().split('T')[0]
      // };
      // console.log('Adding new assignment:', newAssignment);
    }
    navigate('/assignments');
  };

  return (
    <AssignmentForm
      assignment={assignment}
      courses={courses}
      onSubmit={handleSubmit}
      isEdit={isEdit}
    />
  );
};

export default AssignmentFormPage;