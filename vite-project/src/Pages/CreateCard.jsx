import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import uuid from "react-uuid";


export default function CreateCard({addCard}){
    const navigate = useNavigate();
    const defaultImg = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132102&type=card"

    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [manaCost,setMana] = useState("");
    const [text,setText] = useState("");
    // const [toughness, setToughness] = useState(0);
    const [image, setImage] = useState("");
  
    const handleName = (e) => {setName(e.target.value)}
    const handleType = (e) => {setType(e.target.value)}
    const handleText = (e) => {setText(e.target.value)}
    const handleMana = (e) => {setMana(e.target.value)}
    // const handletoughness = (e) => {setToughness(e.target.value)}
    const handleImage = (e) => {setImage(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();

       
        const multiverseid = uuid();
        const imageUrl = image || defaultImg

        addCard({multiverseid,name,manaCost,type,text,imageUrl})
        navigate("/deckListing")
    }
    return (
        <>
        <Navbar/>
        <h1>Magic: The Gathering </h1>
        <hr/>
        <div>
        <h1>Add Card</h1>
        <form className="form"  style ={{display: "flex", alignItems:"flex-start", flexDirection:"column"}} >
            <div className="inputForm" >
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
            />
            </div>

            <div className="inputForm">
            <label>Image URL:</label>
            <input
                type="text"
                name="imgURL"
                value={image}
                onChange={handleImage}
            />
            </div>

            <div className="inputForm">
            <label>Type:</label>
            <input
                type="text"
                name="type"
                value={type}
                onChange={handleType}
            />
            </div>

            <div className="inputForm">
            <label>Text:</label>
            <input
                type="text"
                name="description"
                value={text}
                onChange={handleText}
            />
            </div>

            <div className="inputForm">
            <label>Mana:</label>
            <input
                type="text"
                name="manaCost"
                value={manaCost}
                onChange={handleMana}
            />
            </div>

            <button type="submit" onClick={handleSubmit}>Save Card</button>
           
        </form>
        </div>
        </>
    );
}