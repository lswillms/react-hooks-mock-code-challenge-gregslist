import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard"


function ListingsContainer( { search }) {

  const [ listing, setListing ] = useState([])
 
 useEffect(() => {
  fetch("http://localhost:6001/listings")
  .then((resp) => resp.json())
  .then((data) => setListing(data))
 }, []) 

 function handleDeleteList(deletedItem){
  const listAfterDelete= listing.filter((list) => list.id !== deletedItem.id)
  setListing(listAfterDelete)
 }

 const filteredListings = listing.filter((list) => list.description.toLowerCase().includes(search.toLowerCase()))
 console.log("filtered", filteredListings)




  return (
    <main>
      <ul className="cards">
      {filteredListings.map((list) => (
        <ListingCard
        key = {list.id}
        list = {list}
        handleDeleteList = {handleDeleteList}
        />
 ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
