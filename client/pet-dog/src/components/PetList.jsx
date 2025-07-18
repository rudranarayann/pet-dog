import React from "react";
import PetCard from "./PetCard";

const PetList = ({ pets, deletePet }) => {
  if (!pets || pets.length === 0)
    return <p className="text-center text-gray-500">No pets available</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pets.map((pet) => (
        <PetCard key={pet._id} pet={pet} deletePet={deletePet} />
      ))}
    </div>
  );
};

export default PetList;