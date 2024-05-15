import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function UpdateCard({cardData,setCardData}){
    const navigate = useNavigate();
    const {multiverseid} = useParams()
    const cardFound = cardData.find((card) => card.multiverseid == multiverseid) 
    console.log(cardFound)

    if (!cardFound) return <Navigate to="/"/>

    const [name,setName] = useState(cardFound.name);
    const [type,setType] = useState(cardFound.type);
    const [manaCost,setMana] = useState("");
    const [text,setText] = useState("");
    const [imageUrl, setImage] = useState(cardFound.imageUrl);
  
    const handleName = (e) => {setName(e.target.value)}
    const handleType = (e) => {setType(e.target.value)}
    const handleText = (e) => {setText(e.target.value)}
    const handleMana = (e) => {setMana(e.target.value)}
    const handleImage = (e) => {setImage(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const UpdatedCard = cardData.map((card) => {
        if(card.multiverseid == multiverseid){    
            return{multiverseid,name,manaCost,type,text,imageUrl}
        }
        return card;
    });
        setCardData(UpdatedCard)
        navigate ("/deckListing");
    }

    return(
        <>
        <Navbar/>
        <div>
        <h1>Update Card</h1>
        <form className="form"  style ={{display: "flex", alignItems:"flex-start", flexDirection:"column"}}>
            <div className="inputForm">
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
                value={imageUrl}
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