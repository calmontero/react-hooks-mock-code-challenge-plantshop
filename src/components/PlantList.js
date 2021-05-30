import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {
  return (
    <ul className="cards">
      {
        plantList.map((plantObj) => (
          <PlantCard 
            key={plantObj.id}
            plant={plantObj}
          />
        ))
      }
    </ul>
  );
}

export default PlantList;
