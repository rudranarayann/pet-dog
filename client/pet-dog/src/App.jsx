import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PetList from "./components/PetList";
import AddPetForm from "./components/AddPetForm";
import SearchBar from "./components/Searchbar";
import Footer from "./components/Footer";
import './index.css'


const App = () => {
  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPets = async () => {
    const res = await fetch("https://pet-dog.onrender.com/api/pets");
    const data = await res.json();
    setPets(data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleAddPet = async (newPet) => {
    const res = await fetch("https://pet-dog.onrender.com/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPet),
    });

    if (res.ok) fetchPets();
  };

  const handleDeletePet = async (id) => {
    const res = await fetch(`https://pet-dog.onrender.com/api/pets/${id}`, {
      method: "DELETE",
    });

    if (res.ok) fetchPets();
  };

  const filteredPets = pets.filter((pet) =>
    pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <><Header></Header></>

      <div className="max-w-4xl mx-auto mb-6">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddPetForm onAddPet={handleAddPet} />
        
      </div>

      <PetList pets={filteredPets} deletePet={handleDeletePet} />
      <><Footer></Footer></>
    </div>
  );
};

export default App;
