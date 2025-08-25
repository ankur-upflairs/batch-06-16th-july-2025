import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Mail, Phone, Calendar, BookOpen } from 'lucide-react';

const StudentDetail = ({ student, courses }) => {
  const navigate = useNavigate();
  
  if (!student) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Student Not Found</h2>
          <button 
            onClick={() => navigate('/students')}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Students
          </button>
        </div>
      </div>
    );
  }

  const enrolledCourses = courses.filter(course => student.courses.includes(course.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link 
          to="/students"
          className="text-blue-600 hover:text-blue-800 flex items-center mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Students
        </Link>
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-gray-900">Student Profile</h2>
          <Link
            to={`/students/${student.id}/edit`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
            <div className="px-6 py-8">
              <div className="flex items-center mb-6">
                <img 
                  className="h-24 w-24 rounded-full object-cover mr-6" 
                  src={student.avatar} 
                  alt="" 
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{student.firstName} {student.lastName}</h3>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                    student.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{student.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-900">{student.phone}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Academic Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                      <div>
                        <div className="text-gray-900">Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="text-gray-900">GPA: {student.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Enrolled Courses ({enrolledCourses.length})</h4>
            </div>
            <div className="divide-y divide-gray-200">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="h-10 w-10 text-blue-500 mr-4" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {course.name}
                      </div>
                      <div className="text-sm text-gray-500">{course.code} • {course.instructor}</div>
                    </div>
                  </div>
                  <Link 
                    to={`/courses/${course.id}`}
                    className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                  >
                    View Course
                  </Link>
                </div>
              ))}
              {enrolledCourses.length === 0 && (
                <div className="px-6 py-8 text-center text-gray-500">
                  No courses enrolled yet.
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900">Academic Summary</h4>
            </div>
            <div className="px-6 py-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Courses Enrolled</span>
                    <span>{enrolledCourses.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full" 
                      style={{ width: `${(enrolledCourses.length / 6) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>GPA</span>
                    <span>{student.gpa} / 4.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full" 
                      style={{ width: `${(student.gpa / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;