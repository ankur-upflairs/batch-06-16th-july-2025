import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to LMS Portal</h1>
        <p className="text-xl text-gray-600">Manage your courses and students with ease</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-8">
            <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mx-auto mb-6">
              <BookOpen className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Courses</h2>
            <p className="text-gray-600 text-center mb-6">
              Browse, create, and manage your courses. Track enrollment and course details.
            </p>
            <div className="flex justify-center">
              <Link
                to="/courses"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="p-8">
            <div className="flex items-center justify-center h-16 w-16 bg-green-100 text-green-600 rounded-full mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Students</h2>
            <p className="text-gray-600 text-center mb-6">
              Manage student profiles, track academic progress, and monitor enrollment.
            </p>
            <div className="flex justify-center">
              <Link
                to="/students"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                View Students
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;