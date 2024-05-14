import { Link, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function SingleCard({cardData, deleteCard, addFavourite}){

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

      addFavourite(foundCard)
      navigate("/deckListing");

  }

    return (
      <div className="singleCard">
        <div>
        <div>Name: {foundCard.name}</div>
        <div>Mana Cost: {foundCard.manaCost}</div>
        <img src={foundCard.imageUrl}/>
        <div>Type: {foundCard.type}</div>
        <div>Text: {foundCard.text}</div>
        </div>
        <button onClick={handleFavourites}>Add to Favourites</button>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/singleCard/${multiverseid}/edit`}>
          <div>Edit Me!</div>
        </Link>
      </div>
    );
}