import React, { useState } from "react";

function ListingCard({ list, handleDeleteList }) {

  const [ like , setLike] = useState(false)

  function handleFavorite() {
    setLike((like) => !like)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${list.id}`, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then(() => handleDeleteList(list))
}
  
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={"description"} />
      </div>
      <div className="details">
        {like ? (
          <button onClick= {handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick= {handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button onClick ={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
