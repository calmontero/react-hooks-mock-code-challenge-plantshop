import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  const { id, name, image, price } = plant;
  const [inStock, setInStock] = useState(true);
  const [updatePrice, setUpdatedPrice] = useState(price);

  function handlePrice(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        price: updatePrice 
      }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
      });
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });

    onDeletePlant(id);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={() => setInStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
      <form onSubmit={handlePrice} >
        <input
          type="number"
          step="0.01"
          placeholder="New price..." 
          value={updatePrice}
          onChange={(e) => setUpdatedPrice(parseFloat(e.target.value))}
        />
        <button type="submit" >Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
