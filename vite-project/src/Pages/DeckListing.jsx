import { Link } from "react-router-dom";
import "../App.css"
import { useState } from "react";
// import loading from "../assets/loading.gif"
import Navbar from "../components/Navbar";

export default function DeckListing({cardData,isLoading}){
    const [type, setType] = useState("");
    const handleSetType = (e) => setType(e.target.value);
   
    return (
      <>
      <Navbar/>  
      <div className="DeckListing">
        <div className="ListingHeader">
          <h1>Magic: The Gathering </h1>
          <hr/>
          <h2>Cards Listing</h2>
          <select name={type} onChange={handleSetType}>
            <option value="">All</option>
            <option value="Enchantment">Enchantment</option>
            <option value="Instant">Instant</option>
            <option value="Sorcery">Sorcery</option>
          </select>
        </div>
        
        <ul className="cardsLi"  >
          {isLoading === true?
          <h1>Just a few more seconds...</h1>
          :
          cardData.map((singlecard, index) => {
            if (!singlecard.imageUrl) return;
            if (type === "" || singlecard.type ===type)
            return (
              
              <li className="cards" key={index}>
                <div style={{ backgroundColor: "#59b2ff", width: "223px"}}>
                  {singlecard.name}
                </div>
                <div>{singlecard.type}</div>
                {/* <div>{singlecard.power}</div>
                <div>{singlecard.toughness}</div> */}
                <Link to={`/singleCard/${singlecard.multiverseid}`}>
                  <img
                    style={{ borderRadius: "10px", height:"310px", width:"223px" }}
                    src={singlecard.imageUrl}
                  />
                </Link>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
      </>
    );
}