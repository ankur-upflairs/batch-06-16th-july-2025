import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, User, Clock, GraduationCap, Calendar } from 'lucide-react';

const CourseDetail = ({ course, students }) => {
  const navigate = useNavigate();
  
  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <button 
            onClick={() => navigate('/courses')}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Courses
          </button>
        </div>
      </div>
    );
  }

  const enrolledStudents = students.filter(student => student.courses.includes(course.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link 
          to="/courses"
          className="text-blue-600 hover:text-blue-800 flex items-center mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Courses
        </Link>
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-gray-900">Course Details</h2>
          <Link
            to={`/courses/${course.id}/edit`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Course
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
            <div className="px-6 py-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-lg text-gray-600 mb-2">{course.code}</p>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    course.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-600">{course.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Course Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{course.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{course.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{course.credits} Credits</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Schedule</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-gray-900">Start: {new Date(course.startDate).toLocaleDateString()}</div>
                        <div className="text-gray-900">End: {new Date(course.endDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Enrolled Students ({enrolledStudents.length})</h4>
            </div>
            <div className="divide-y divide-gray-200">
              {enrolledStudents.map((student) => (
                <div key={student.id} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      className="h-10 w-10 rounded-full object-cover" 
                      src={student.avatar} 
                      alt="" 
                    />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.firstName} {student.lastName}
                      </div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    student.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </div>
              ))}
              {enrolledStudents.length === 0 && (
                <div className="px-6 py-8 text-center text-gray-500">
                  No students enrolled in this course yet.
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Enrollment Status</h4>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Enrolled</span>
                  <span>{course.enrolled}/{course.capacity}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full" 
                    style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {course.capacity - course.enrolled} spots remaining
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;