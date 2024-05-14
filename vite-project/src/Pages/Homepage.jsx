import { Link } from "react-router-dom";

export default function Homepage(){


  return (
    <div className="homepage">
      <h1></h1>
      <div className="homepageMenu">
        <Link to="/createCard">
          <div className="homepageMenuCard" >Create</div>
        </Link>
        <Link to="/deckListing">
          <div className="homepageMenuCard">DeckListing</div>
        </Link>
        <Link to="/favourites">
          <div className="homepageMenuCard">Favs</div>
        </Link>
      </div>
    </div>
  );
}