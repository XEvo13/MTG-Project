import { Link } from "react-router-dom";

export default function DeckListing({cardData}){

    // console.log(cardData)
    return (
      <div className="DeckListing">
        <div className="ListingHeader">
          <h1>Magic: The Gathering </h1>
          <h2>Cards Listing</h2>
        </div>
        <div>Maping of the Cards</div>
        <ul className="cardsLi" >
          {cardData.map((singlecard, index) => (
            <li className="cards" key={index}>
              <div>{singlecard.name}</div>
              <div>{singlecard.type}</div>
              <div>{singlecard.power}</div>
              <div>{singlecard.toughness}</div>
              <Link to={`/SingleCard/${singlecard.multiverseid}`}>
              <img src={singlecard.imageUrl} />
              </Link>
            </li>
          ))}
        </ul>
        <div>{cardData[0].name}</div>
      </div>
    );
}