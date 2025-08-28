import React ,{useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AssignmentDetail from '../components/AssignmentDetail';
import { initialAssignments, initialCourses } from '../data';
import axios from 'axios';

const AssignmentDetailPage = () => {
  const { id } = useParams();
  // const assignmentId = parseInt(id);
  const [assignment, setAssignment] = useState(initialAssignments);
    const [courses,setCourses] = useState(null)
  
  // const assignment = initialAssignments.find(a => a.id === assignmentId);
  const course = courses ? courses.find(c => c._id === assignment.courseId) : null;
  useEffect(()=>{
      async function getData() {
      let res = await  axios.get(import.meta.env.VITE_BACKEND_URL+'/assignments/'+id)
      let resData = await  axios.get(import.meta.env.VITE_BACKEND_URL+'/courses')
        setAssignment(res.data.assignment)
        setCourses(resData.data.courses)
        // console.log(res.data.students)
        
      }
      getData()
    },[])
  return (
    <AssignmentDetail 
      assignment={assignment} 
      course={course || {}} 
    />
  );
};

export default AssignmentDetailPage;