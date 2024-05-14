import { NavLink, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="Navbar">
            <ul className="NavbarUl">
                <NavLink to="/deckListing" className={({isActive}) => (isActive ? "active" : "")}>Cards Library</NavLink>
                <NavLink to="/createCard" className={({isActive}) => (isActive ? "active" : "")}>Create Card</NavLink>
                <NavLink to="/favourites" className={({isActive}) => (isActive ? "active" : "")}>Favs</NavLink>
            </ul>
        </nav>
    )
}