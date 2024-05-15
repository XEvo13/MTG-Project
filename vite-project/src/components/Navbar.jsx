import { NavLink, Link } from "react-router-dom";
 import logo from "../assets/logo.png"

export default function Navbar(){
    return(
        <nav className="Navbar" style={{display:"flex"}}>
            <Link to="/">
            <img src={logo} style={{height: "60px"}}/>
            </Link>
            <ul className="NavbarUl" style={{display:"flex", alignSelf:"flex-end"}}>
                <NavLink to="/deckListing" className={({isActive}) => (isActive ? "active" : "")}>Cards Library</NavLink>
                <NavLink to="/createCard" className={({isActive}) => (isActive ? "active" : "")}>Create Card</NavLink>
                <NavLink to="/favourites" className={({isActive}) => (isActive ? "active" : "")}>Favs</NavLink>
            </ul>
        </nav>
    )
}