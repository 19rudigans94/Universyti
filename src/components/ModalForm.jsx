import React, { useState } from 'react';

export default function ModalForm({ closeModal, addItem }) {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        tel: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                <h2 className="text-lg font-bold mb-4">Добавить запись</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm">Имя:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm">Возраст:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm">Телефон:</label>
                        <input
                            type="tel"
                            name="tel"
                            value={formData.tel}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                        >
                            Добавить
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                        >
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}