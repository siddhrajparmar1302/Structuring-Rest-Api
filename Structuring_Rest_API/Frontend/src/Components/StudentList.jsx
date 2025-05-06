import React from 'react';
import axios from 'axios';

const StudentList = ({ students, fetchStudents, setSelectedStudent }) => {
  const deleteStudent = async id => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  return (
    <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Roll Number</th>
          <th>School Name</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student._id}>
            <td>{student.sname}</td>
            <td>{student.srollno}</td>
            <td>{student.school}</td>
            <td>{student.city}</td>
            <td>
              <button
                className='edit-btn'
                style={{
                  backgroundColor: 'lightgreen',
                  marginRight: '10px',
                  padding: '10px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedStudent(student)}
              >
                Edit
              </button>
              <button
                className='del-btn'
                style={{
                  backgroundColor: 'coral',
                  padding: '10px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onClick={() => deleteStudent(student._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
