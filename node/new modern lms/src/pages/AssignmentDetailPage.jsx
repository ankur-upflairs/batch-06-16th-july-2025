import React from 'react';
import { useParams } from 'react-router-dom';
import AssignmentDetail from '../components/AssignmentDetail';
import { initialAssignments, initialCourses } from '../data';

const AssignmentDetailPage = () => {
  const { id } = useParams();
  const assignmentId = parseInt(id);
  
  const assignment = initialAssignments.find(a => a.id === assignmentId);
  const course = assignment ? initialCourses.find(c => c.id === assignment.courseId) : null;

  return (
    <AssignmentDetail 
      assignment={assignment} 
      course={course || {}} 
    />
  );
};

export default AssignmentDetailPage;