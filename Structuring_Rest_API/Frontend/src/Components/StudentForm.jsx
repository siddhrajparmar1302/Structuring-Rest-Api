import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentStyle.css';

const StudentForm = ({ fetchStudents, selectedStudent, clearSelectedStudent }) => {
  const [formData, setFormData] = useState({
    sname: '',
    srollno: '',
    school: '',
    city: ''
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        sname: selectedStudent.sname,
        srollno: selectedStudent.srollno,
        school: selectedStudent.school,
        city: selectedStudent.city
      });
    }
  }, [selectedStudent]);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (selectedStudent) {
      await axios.put(`http://localhost:5000/api/students/${selectedStudent._id}`, formData);
    } else {
      await axios.post('http://localhost:5000/api/students', formData);
    }
    fetchStudents();
    setFormData({ sname: '', srollno: '', school: '', city: '' });
    clearSelectedStudent?.();
  };

  return (
    <div className="container">
      <div className="sub-container">
        <form onSubmit={handleSubmit} className="student-form">
          <input
            type="text"
            name="sname"
            value={formData.sname}
            onChange={handleChange}
            placeholder="Enter Student Name"
          /><br />

          <input
            type="text"
            name="srollno"
            value={formData.srollno}
            onChange={handleChange}
            placeholder="Enter Roll Number"
          /><br />

          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="Enter School Name"
          /><br />

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter City"
          /><br />

          <button className="Add-student" type="submit">
            {selectedStudent ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
