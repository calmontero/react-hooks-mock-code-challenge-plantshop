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

  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plant.map((plantList) => {
      if (plantList.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plantList;
      }
    });
    setPlant(updatedPlants);
  }

  function handleDeletePlant(id) {
    const updatedPlants = plant.filter((plantList) => plantList.id !== id);
    setPlant(updatedPlants);
  }

  const displayPlants = plant.filter((plantList) => 
    plantList.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={setSearch} />
      <PlantList plantList={displayPlants} 
        onUpdatePlant={handleUpdatePlant} 
        onDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;
