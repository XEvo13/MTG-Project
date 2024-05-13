import { useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import axios from 'axios'
import './App.css'

//  import Data from './lib/Data'


//Pages
import Homepage from './Pages/Homepage'
import DeckListing from './Pages/DeckListing'
import CreateCard from './Pages/CreateCard'
import MyCards from './Pages/MyCards'
import SingleCard from './Pages/SingleCard'


function App() {

  const [cardData,setCardData] = useState([]); 
 

// GET CARD DATA
  const cardsURL = "https://api.magicthegathering.io/v1/cards"; 
  useEffect(()=>{
    
        axios.get(cardsURL)
       .then((response) =>{
        return  setCardData(response.data.cards)
        })
        .catch((error) => console.log("error",error))
  },[])

// ADD CARD

  const addCard = (card) => setCardData([...cardData,card]);
  console.log(cardData)

  return (
    <Routes>
     <Route path="/" element={<Homepage />}/>
     <Route path="/deckListing" element={<DeckListing cardData={cardData}/>}/>
     <Route path="/createCard" element={<CreateCard addCard={addCard}/>}/>
     <Route path="singleCard/:multiverseid" element ={<SingleCard cardData={cardData}/>}/>
     <Route path="favourites" element={<MyCards />}/>
    </Routes>
  )
}

export default App
