// Dummy assignment data
export const initialAssignments = [
  {
    id: 1,
    title: 'Calculus Problem Set 1',
    description: 'Complete problems 1-10 from Chapter 3',
    courseId: 1,
    dueDate: '2024-02-15',
    points: 100,
    status: 'Active',
    submissionType: 'File Upload',
    createdAt: '2024-01-20'
  },
  {
    id: 2,
    title: 'Physics Lab Report',
    description: 'Write a lab report on the pendulum experiment',
    courseId: 2,
    dueDate: '2024-02-20',
    points: 150,
    status: 'Active',
    submissionType: 'Document',
    createdAt: '2024-01-25'
  },
  {
    id: 3,
    title: 'Programming Assignment 1',
    description: 'Implement a sorting algorithm in Python',
    courseId: 3,
    dueDate: '2024-02-10',
    points: 100,
    status: 'Active',
    submissionType: 'Code',
    createdAt: '2024-01-22'
  },
  {
    id: 4,
    title: 'Statistics Quiz',
    description: 'Online quiz covering descriptive statistics',
    courseId: 4,
    dueDate: '2024-02-05',
    points: 50,
    status: 'Inactive',
    submissionType: 'Online Quiz',
    createdAt: '2024-01-15'
  },
  {
    id: 5,
    title: 'Biology Research Paper',
    description: 'Write a 5-page research paper on cell division',
    courseId: 5,
    dueDate: '2024-03-01',
    points: 200,
    status: 'Active',
    submissionType: 'Document',
    createdAt: '2024-01-10'
  },
  {
    id: 6,
    title: 'Chemistry Lab Report',
    description: 'Document your findings from the titration experiment',
    courseId: 6,
    dueDate: '2024-02-25',
    points: 150,
    status: 'Active',
    submissionType: 'Document',
    createdAt: '2024-01-18'
  }
];

// Dummy student data
export const initialStudents = [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@email.com',
    phone: '+1 (555) 123-4567',
    enrollmentDate: '2024-01-15',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    courses: [1, 2], // Course IDs
    gpa: 3.8
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@email.com',
    phone: '+1 (555) 234-5678',
    enrollmentDate: '2024-02-20',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    courses: [3, 4], // Course IDs
    gpa: 3.6
  },
  {
    id: 3,
    firstName: 'Carol',
    lastName: 'Davis',
    email: 'carol.davis@email.com',
    phone: '+1 (555) 345-6789',
    enrollmentDate: '2024-01-10',
    status: 'Inactive',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    courses: [5, 6], // Course IDs
    gpa: 3.9
  }
];

// Dummy courses data
export const initialCourses = [
  {
    id: 1,
    name: 'Mathematics 101',
    code: 'MATH101',
    description: 'Introduction to calculus and algebraic concepts',
    instructor: 'Dr. Sarah Wilson',
    credits: 3,
    capacity: 30,
    enrolled: 25,
    startDate: '2024-01-15',
    endDate: '2024-05-15',
    status: 'Active',
    schedule: 'Mon, Wed, Fri - 9:00 AM',
    category: 'Mathematics'
  },
  {
    id: 2,
    name: 'Physics 201',
    code: 'PHYS201',
    description: 'Classical mechanics and thermodynamics',
    instructor: 'Prof. Michael Chen',
    credits: 4,
    capacity: 25,
    enrolled: 20,
    startDate: '2024-01-15',
    endDate: '2024-05-15',
    status: 'Active',
    schedule: 'Tue, Thu - 2:00 PM',
    category: 'Physics'
  },
  {
    id: 3,
    name: 'Computer Science 101',
    code: 'CS101',
    description: 'Introduction to programming and algorithms',
    instructor: 'Dr. Emily Rodriguez',
    credits: 3,
    capacity: 35,
    enrolled: 32,
    startDate: '2024-01-20',
    endDate: '2024-05-20',
    status: 'Active',
    schedule: 'Mon, Wed, Fri - 11:00 AM',
    category: 'Computer Science'
  },
  {
    id: 4,
    name: 'Statistics 101',
    code: 'STAT101',
    description: 'Descriptive and inferential statistics',
    instructor: 'Dr. James Thompson',
    credits: 3,
    capacity: 40,
    enrolled: 35,
    startDate: '2024-02-01',
    endDate: '2024-06-01',
    status: 'Active',
    schedule: 'Tue, Thu - 10:00 AM',
    category: 'Mathematics'
  },
  {
    id: 5,
    name: 'Biology 101',
    code: 'BIO101',
    description: 'Fundamentals of cellular and molecular biology',
    instructor: 'Dr. Lisa Martinez',
    credits: 4,
    capacity: 28,
    enrolled: 24,
    startDate: '2024-01-10',
    endDate: '2024-05-10',
    status: 'Active',
    schedule: 'Mon, Wed - 1:00 PM',
    category: 'Biology'
  },
  {
    id: 6,
    name: 'Chemistry 101',
    code: 'CHEM101',
    description: 'General chemistry principles and laboratory',
    instructor: 'Prof. David Kim',
    credits: 4,
    capacity: 20,
    enrolled: 18,
    startDate: '2024-01-12',
    endDate: '2024-05-12',
    status: 'Inactive',
    schedule: 'Tue, Thu - 3:00 PM',
    category: 'Chemistry'
  }
];