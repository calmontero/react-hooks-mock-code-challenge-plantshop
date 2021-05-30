import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plant, setPlant] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((plants) => setPlant(plants));   
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlants = [...plant, newPlant];
    setPlant(updatedPlants);
  }
/*
  function handleSearch(newSearch) {
    setSearch(newSearch);
  }*/

  const displayPlants = plant.filter((plantList) => 
    plantList.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={setSearch} />
      <PlantList plantList={displayPlants} />
    </main>
  );
}

export default PlantPage;
