import React, { useEffect, useState } from 'react';
import AssignmentList from '../components/AssignmentList';
import { initialAssignments, initialCourses } from '../data';
import axios from 'axios';

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [courses,setCourses] = useState(initialCourses)
  const handleDeleteAssignment = (id) => {
    setAssignments(assignments.filter(assignment => assignment.id !== id));
  };
  useEffect(()=>{
    async function getData() {
    let res = await  axios.get(import.meta.env.VITE_BACKEND_URL+'/assignments')
    let resData = await  axios.get(import.meta.env.VITE_BACKEND_URL+'/courses')
      setAssignments(res.data.assignments)
      setCourses(resData.data.courses)
      // console.log(res.data.students)
      
    }
    getData()
  },[])

  return (
    <AssignmentList 
      assignments={assignments} 
      courses={courses}
      onDeleteAssignment={handleDeleteAssignment}
    />
  );
};

export default AssignmentsPage;