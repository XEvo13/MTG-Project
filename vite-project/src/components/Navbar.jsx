import { NavLink, Link } from "react-router-dom";
 import logo from "../assets/logo.png"

export default function Navbar(){
    return(
        <nav className="Navbar" style={{display:"flex", position:"fixed", top:"0", width:"97%", backgroundColor:"#000d17"}}>
            <Link to="/">
            <img src={logo} style={{height: "60px"}}/>
            </Link>
            <ul className="NavbarUl" >
                <NavLink to="/deckListing" style={{ padding:"40px"}} className={({isActive}) => (isActive ? "active" : "")}>Library  </NavLink>
                <NavLink to="/createCard" style={{ padding:"40px"}} className={({isActive}) => (isActive ? "active" : "")}>  Create Card  </NavLink>
                <NavLink to="/favourites" style={{ padding:"40px"}} className={({isActive}) => (isActive ? "active" : "")}>Favourites  </NavLink>
                <a href="https://magic.wizards.com/en/how-to-play" target="_blanck" style={{ padding:"40px"}} className={({isActive}) => (isActive ? "active" : "")}>Learn how to Play!!  </a>
            </ul>
        </nav>
    )
}