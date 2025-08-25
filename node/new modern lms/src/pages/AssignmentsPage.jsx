import React, { useState } from 'react';
import AssignmentList from '../components/AssignmentList';
import { initialAssignments, initialCourses } from '../data';

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState(initialAssignments);

  const handleDeleteAssignment = (id) => {
    setAssignments(assignments.filter(assignment => assignment.id !== id));
  };

  return (
    <AssignmentList 
      assignments={assignments} 
      courses={initialCourses}
      onDeleteAssignment={handleDeleteAssignment}
    />
  );
};

export default AssignmentsPage;