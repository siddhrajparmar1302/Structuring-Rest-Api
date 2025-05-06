import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from '../Components/StudentForm';
import StudentList from '../components/StudentList';

const Home = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:5000/api/students');
    setStudents(res.data);
  };

  const clearSelectedStudent = () => setSelectedStudent(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student Management</h2>
      <StudentForm
        fetchStudents={fetchStudents}
        selectedStudent={selectedStudent}
        clearSelectedStudent={clearSelectedStudent}
      />
      <StudentList
        students={students}
        fetchStudents={fetchStudents}
        setSelectedStudent={setSelectedStudent}
      />
    </div>
  );
};

export default Home;
