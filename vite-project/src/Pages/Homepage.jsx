import { Link } from "react-router-dom";
import cover from "../assets/cover2.jpeg"
export default function Homepage(){


  return (
    <div>
      <div style={{fontSize:"80px",fontFamily:'Inter'}}>Magic: the Gathering</div>
      <hr/>
      <div style={{display:"grid", gridTemplateColumns: "33% 33% 33%"}}>  
      <h1>Create</h1>
      <h1>Cards Listing</h1>
      <h1>Favourites</h1> 
      </div>
       <div className="homepage">
      <div className="homepageMenu" >
        <Link to="/createCard">
          <img src={cover} style={{borderRadius:"10%", padding:"10px"}}/>
        </Link>
        <Link to="/deckListing">
        <img src={cover}  style={{borderRadius:"10%",  padding:"10px"}}/>
        </Link>
        <Link to="/favourites">
        <img src={cover}  style={{borderRadius:"10%", padding:"10px"}}/>
        </Link>
      </div>
    </div>
    </div>
  );
}