 import { Link, useNavigate } from "react-router-dom";
 import "../App.css"

export default function MyCards({favourites}){
  console.log(favourites)
   const navigate = useNavigate();
    return(
      <div className="MyCards">
      <div className="MyCardsHeader">
        <h1>Magic: The Gathering </h1>
        <h2>My Favourite Cards</h2>
      </div>
        {favourites.length ===0 ?
        <Link to="/decklisting">No cards, back to CardList</Link>
        :
        favourites.map((singlecard, index) => {
          return (
            <li className="cards" key={index}>
              <div >{singlecard.name}</div>
              <div>{singlecard.type}</div>
              <img src={singlecard.imageUrl} />
            </li>
          );
        })
        }
    
      </div>
    )
}