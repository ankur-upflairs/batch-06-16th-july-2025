import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Users, FileText } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">LMS Portal</h1>
          </div>
          <nav className="flex space-x-8">
            <Link 
              to="/students"
              className={`flex items-center px-3 py-2 rounded-md font-medium transition-colors ${
                currentPath.startsWith('/student') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Students
            </Link>
            <Link 
              to="/courses"
              className={`flex items-center px-3 py-2 rounded-md font-medium transition-colors ${
                currentPath.startsWith('/course') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Courses
            </Link>
            <Link 
              to="/assignments"
              className={`flex items-center px-3 py-2 rounded-md font-medium transition-colors ${
                currentPath.startsWith('/assignment') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-4 h-4 mr-2" />
              Assignments
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;