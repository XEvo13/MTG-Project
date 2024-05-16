 import { Link, useNavigate } from "react-router-dom";
 import "../App.css"
 import Navbar from "../components/Navbar"; 

export default function MyCards({favourites, deleteFav}){
  console.log(favourites)
   const navigate = useNavigate();
    return(
      <>
      <Navbar/>
      <h1>Magic: The Gathering </h1>
        <hr/>
        <h2>My Favourite Cards</h2>
      <div className="MyCards">
      
      <div className="MyCardsHeader">
        

      </div>
        {favourites.length ===0 ?
        <Link to="/decklisting">No cards, back to CardList</Link>
        :
        favourites.map((singlecard, index) => {
          return (

            <li className="cards" style={{display:"flex"}} key={index}>
           
              <div >{singlecard.name}</div>
              <div>{singlecard.type}</div>
              <img src={singlecard.imageUrl} style={{borderRadius:"10%"}} />
              <button className="delete-button" onClick={() => deleteFav(singlecard.multiverseid)}>Delete this from Favourites</button>
            </li>
          );
        })
        }
    
      </div>
      </>
    )
}