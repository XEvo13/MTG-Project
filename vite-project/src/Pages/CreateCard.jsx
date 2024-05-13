import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function CreateCard({addCard}){
    const navigate = useNavigate();
    const defaultImg = "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132102&type=card"

    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [power,setPower] = useState(0);
    const [toughness, setToughness] = useState(0);
    const [image, setImage] = useState("");
  
    const handleName = (e) => {setName(e.target.value)}
    const handleType = (e) => {setType(e.target.value)}
    const handlePower = (e) => {setPower(e.target.value)}
    const handletoughness = (e) => {setToughness(e.target.value)}
    const handleImage = (e) => {setImage(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();

       
        const multiverseid = 876234;
        const imageUrl = image || defaultImg

        addCard({multiverseid,name,type,power,toughness,imageUrl})

        navigate("/deckListing")

    }

    

    return (
        
        <div>
        <h1>Add Card</h1>
        <form>
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