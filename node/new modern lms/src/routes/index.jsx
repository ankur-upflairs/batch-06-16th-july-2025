import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage';
import StudentsPage from '../pages/StudentsPage';
import StudentDetailPage from '../pages/StudentDetailPage';
import StudentFormPage from '../pages/StudentFormPage';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailPage from '../pages/CourseDetailPage';
import CourseFormPage from '../pages/CourseFormPage';
import AssignmentsPage from '../pages/AssignmentsPage';
import AssignmentDetailPage from '../pages/AssignmentDetailPage';
import AssignmentFormPage from '../pages/AssignmentFormPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      
      {/* Student Routes */}
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/students/:id" element={<StudentDetailPage />} />
      <Route path="/students/new" element={<StudentFormPage />} />
      <Route path="/students/:id/edit" element={<StudentFormPage />} />
      
      {/* Course Routes */}
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
      <Route path="/courses/new" element={<CourseFormPage />} />
      <Route path="/courses/:id/edit" element={<CourseFormPage />} />
      
      {/* Assignment Routes */}
      <Route path="/assignments" element={<AssignmentsPage />} />
      <Route path="/assignments/new" element={<AssignmentFormPage />} />
      <Route path="/assignments/:id/edit" element={<AssignmentFormPage />} />
      <Route path="/assignments/:id" element={<AssignmentDetailPage />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;