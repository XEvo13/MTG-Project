import { Link } from "react-router-dom";

export default function Homepage(){


  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <div className="homepageMenu">
        <Link to="/createCard">
          <div>Create</div>
        </Link>
        <Link to="/deckListing">
          <div>DeckListing</div>
        </Link>
        <Link to="/favourites">
          <div>Favs</div>
        </Link>
      </div>
    </div>
  );
}