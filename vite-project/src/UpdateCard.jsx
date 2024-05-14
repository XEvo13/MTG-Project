import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";


export default function UpdateCard({cardData,setCardData}){
    const navigate = useNavigate();
    const {multiverseid} = useParams()
    const cardFound = cardData.find((card) => card.multiverseid == multiverseid) 
    console.log(cardFound)

    if (!cardFound) return <Navigate to="/"/>

    const [name,setName] = useState(cardFound.name);
    const [type,setType] = useState(cardFound.type);
    const [power,setPower] = useState(cardFound.power);
    const [toughness, setToughness] = useState(cardFound.toughness);
    const [imageUrl, setImage] = useState(cardFound.imageUrl);
  
    const handleName = (e) => {setName(e.target.value)}
    const handleType = (e) => {setType(e.target.value)}
    const handlePower = (e) => {setPower(e.target.value)}
    const handletoughness = (e) => {setToughness(e.target.value)}
    const handleImage = (e) => {setImage(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const UpdatedCard = cardData.map((card) => {
        if(card.multiverseid == multiverseid){    
            return{multiverseid, name,type,power,toughness,imageUrl}
        }
        return card;
    });
        setCardData(UpdatedCard)
        navigate ("/");
    }

    return(
        <div>
        <h1>Add Card</h1>
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
            <label>Power:</label>
            <input
                type="text"
                name="description"
                value={power}
                onChange={handlePower}
            />
            </div>

            <div className="inputForm">
            <label>Toughness:</label>
            <input
                type="number"
                name="price"
                value={toughness}
                onChange={handletoughness}
            />
            </div>
            <button type="submit" onClick={handleSubmit}>Save Card</button>
           
        </form>
        </div>
    );

    
}