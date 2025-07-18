import React, { useState } from "react";
import '../index.css'


const AddPetForm = ({ onAddPet }) => {
  const [form, setForm] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.breed) return;
    onAddPet({ ...form, age: Number(form.age) });
    setForm({ name: "", species: "", breed: "", age: "", description: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 md:p-8 max-w-3xl mx-auto w-full"
    >
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Add a New Pet</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pet Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Species</label>
          <input
            name="species"
            value={form.species}
            onChange={handleChange}
            placeholder="e.g. Dog"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
          <input
            name="breed"
            value={form.breed}
            onChange={handleChange}
            placeholder="Breed"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Age (in years)</label>
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            type="number"
            placeholder="e.g. 3"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Short description..."
            rows={3}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-200"
      >
        Add Pet
      </button>
    </form>
  );
};

export default AddPetForm;
