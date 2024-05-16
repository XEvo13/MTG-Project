import { useState } from "react";
import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function SingleCard({cardData, deleteCard, addFavourite, favourites}){
    
    const navigate = useNavigate();
    const {multiverseid} = useParams();

    const foundCard = cardData.find((card) => card.multiverseid == multiverseid) 

    const handleDelete = (e) => {
        e.preventDefault()

        deleteCard(foundCard.multiverseid);
        navigate("/deckListing");
    }

    const handleFavourites = (e) => {
      e.preventDefault()
      if(favourites.find((card) => card.multiverseid == multiverseid)) return;
      addFavourite(foundCard)
      navigate("/deckListing");
  }

    return (
      <>
      <Navbar/>
      <h1>Magic: The Gathering </h1>
      <hr/>
      <div className="singleCard">
        <div>
        <div>Name: {foundCard.name}</div>
        <div>Mana Cost: {foundCard.manaCost}</div>
        <img src={foundCard.imageUrl} style={{borderRadius:"10%"}}/>
        <div>Type: {foundCard.type}</div>
        <div>Text: {foundCard.text}</div>
        </div>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <button onClick={handleFavourites} style={{backgroundColor:"red"}}>Add to Favourites</button>
        <button onClick={handleDelete}>Delete</button>
        </div>
        <Link to={`/singleCard/${multiverseid}/edit`}>
          <div style={{color:"white"}}>Edit Me!</div>
        </Link>
      </div>
      </>
    );
}