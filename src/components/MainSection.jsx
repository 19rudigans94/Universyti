import React from 'react';

export default function MainSection({ view, students, teachers, openModal, deleteStudent, deleteTeacher }) {
    return (
        <div className="flex gap-5">
            {view === 'students' && (
                <div className="w-full">
                    <h2>Students</h2>
                    <ul className="grid grid-cols-2 gap-1">
                        {students.map(student => (
                            <li className="p-2 border" key={student.id}>
                                Имя: {student.name} - Возраст: {student.age} - Email: {student.email} - Телефон: {student.tel}
                                <div>
                                    <button
                                        className="bg-red-500 text-white p-1 hover:bg-red-700 mt-2 rounded"
                                        onClick={() => deleteStudent(student.id)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button
                            className="bg-green-500 text-white p-3 mt-4 hover:bg-green-700"
                            onClick={openModal}
                        >
                            Добавить студента
                        </button>
                    </div>
                </div>
            )}

            {view === 'teachers' && (
                <div className="w-full">
                    <h2>Teachers</h2>
                    <ul className="grid grid-cols-2 gap-1">
                        {teachers.map(teacher => (
                            <li className="p-2 border" key={teacher.id}>
                                Имя: {teacher.name} - Возраст: {teacher.age} - Email: {teacher.email} - Телефон: {teacher.tel}
                                <div>
                                    <button
                                        className="bg-red-500 text-white p-1 hover:bg-red-700 mt-2 rounded"
                                        onClick={() => deleteTeacher(teacher.id)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button
                            className="bg-green-500 text-white p-3 mt-4 hover:bg-green-700"
                            onClick={openModal}
                        >
                            Добавить учителя
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}