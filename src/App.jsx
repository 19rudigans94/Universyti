import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import ModalForm from './components/ModalForm';

const initialStudents = [
  { id: 1, name: 'Ivan', age: 20, tel: 1234567890, email: 'a@a.com' },
  { id: 2, name: 'Petr', age: 25, tel: 1234567890, email: 'b@b.com' },
  { id: 3, name: 'Sidor', age: 30, tel: 1234567890, email: 'c@c.com' },
];

const initialTeachers = [
  { id: 4, name: 'Sidor', age: 30, tel: 1234567890, email: 'c@c.com' },
  { id: 5, name: 'Petr', age: 25, tel: 1234567890, email: 'b@b.com' },
  { id: 6, name: 'Ivan', age: 20, tel: 1234567890, email: 'a@a.com' },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [teachers, setTeachers] = useState(initialTeachers);
  const [view, setView] = useState('students');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: Date.now() }]);
    closeModal();
  };

  const addTeacher = (newTeacher) => {
    setTeachers([...teachers, { ...newTeacher, id: Date.now() }]);
    closeModal();
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  return (
    <div className="App w-[80%] mx-auto">
      <Header />
      <div className="flex gap-5">
        <button
          className={`bg-blue-300 hover:bg-blue-400 active:bg-blue-500 rounded p-1 m-1 ${view === 'students' && 'bg-blue-500'}`}
          onClick={() => setView('students')}
        >
          Студенты
        </button>
        <button
          className={`bg-blue-300 hover:bg-blue-400 active:bg-blue-500 rounded p-1 m-1 ${view === 'teachers' && 'bg-blue-500'}`}
          onClick={() => setView('teachers')}
        >
          Преподаватели
        </button>
      </div>
      <MainSection
        view={view}
        students={students}
        teachers={teachers}
        openModal={openModal}
        deleteStudent={deleteStudent}
        deleteTeacher={deleteTeacher}
      />
      {isModalOpen && (
        <ModalForm
          closeModal={closeModal}
          addItem={view === 'students' ? addStudent : addTeacher}
        />
      )}
      <Footer view={view} />
      
    </div>
  );
}