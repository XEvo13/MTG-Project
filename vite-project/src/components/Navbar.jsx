import { NavLink, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="Navbar">
            <ul className="NavbarUl">
                <NavLink to="/deckListing" className={({isActive}) => (isActive ? "active" : "")}></NavLink>
                <NavLink to="/createCard" className={({isActive}) => (isActive ? "active" : "")}></NavLink>
                <NavLink to="/favourites" className={({isActive}) => (isActive ? "active" : "")}></NavLink>
            </ul>
        </nav>
    )
}