import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList, onUpdatePlant, onDeletePlant }) {
  return (
    <ul className="cards">
      {
        plantList.map((plantObj) => (
          <PlantCard 
            key={plantObj.id}
            plant={plantObj}
            onUpdatePlant={onUpdatePlant}
            onDeletePlant={onDeletePlant}
          />
        ))
      }
    </ul>
  );
}

export default PlantList;
