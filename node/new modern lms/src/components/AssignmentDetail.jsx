import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Edit, Calendar, BookOpen, FileText, Clock } from 'lucide-react';

const AssignmentDetail = ({ assignment, course }) => {
  if (!assignment) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Assignment Not Found</h2>
          <Link 
            to="/assignments"
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Assignments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link 
          to="/assignments"
          className="text-blue-600 hover:text-blue-800 flex items-center mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Assignments
        </Link>
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-gray-900">Assignment Details</h2>
          <Link
            to={`/assignments/${assignment.id}/edit`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Assignment
          </Link>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
        <div className="px-6 py-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{assignment.title}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <BookOpen className="w-4 h-4 mr-2" />
                <Link to={`/courses/${course.id}`} className="text-blue-600 hover:text-blue-900">
                  {course.name} ({course.code})
                </Link>
              </div>
              <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                assignment.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {assignment.status}
              </span>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900">{assignment.points} points</div>
              <div className="text-sm text-gray-600">{assignment.submissionType}</div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
            <p className="text-gray-600">{assignment.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Assignment Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">Created: {new Date(assignment.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-900">Submission Type: {assignment.submissionType}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Information</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-gray-900">{course.name}</div>
                    <div className="text-sm text-gray-600">{course.code}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-gray-900">Course Schedule: {course.schedule}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submission section could be added here in the future */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900">Submission</h4>
        </div>
        <div className="px-6 py-8 text-center">
          <FileText className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No submission yet</h3>
          <p className="mt-1 text-sm text-gray-500">
            Upload your assignment submission before the due date.
          </p>
          <div className="mt-6">
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Upload Submission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;