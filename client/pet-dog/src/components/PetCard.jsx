import React from "react";

const PetCard = ({ pet, deletePet }) => (
  <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between 
                  transition-all duration-300 transform hover:scale-105 
                  hover:shadow-xl hover:border hover:border-indigo-300 cursor-pointer">
    <h3 className="text-lg font-bold text-indigo-700 mb-1">
      <strong>Name:</strong> {pet.name}
    </h3>
    <p><strong>Species:</strong> {pet.species}</p>
    <p><strong>Breed:</strong> {pet.breed}</p>
    <p><strong>Age:</strong> {pet.age} years</p>
    <p className="text-sm text-gray-600 mt-1">{pet.description}</p>

    <button
      onClick={() => deletePet(pet._id)}
      className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-200"
    >
      Delete
    </button>
  </div>
);

export default PetCard;
