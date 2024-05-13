import { useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import axios from 'axios'
import './App.css'




//Pages
import Homepage from './Pages/Homepage'
import DeckListing from './Pages/DeckListing'
import CreateCard from './Pages/CreateCard'
import MyCards from './Pages/MyCards'
import SingleCard from './Pages/SingleCard'
import UpdateCard from './UpdateCard'
import { fetchCards } from './lib/Data'

function App() {

  const [cardData,setCardData] = useState([]); 
 

// GET CARD DATA
  const cardsURL = "https://api.magicthegathering.io/v1/cards"; 
  useEffect(() => {
    fetchCards().then((data) => {
      setCardData(data);
    });
  }, []);
  console.log(cardData)
// ADD CARD

  const addCard = (card) => setCardData([...cardData,card]);
 
  // const test = fetchCards();
  // console.log(test)
  return (
    <Routes>
     <Route path="/" element={<Homepage />}/>
     <Route path="/deckListing" element={<DeckListing cardData={cardData}/>}/>
     <Route path="/createCard" element={<CreateCard addCard={addCard}/>}/>
     <Route path="/singleCard/:multiverseid/edit" element ={<UpdateCard cardData={cardData}/>}/>
     <Route path="singleCard/:multiverseid" element ={<SingleCard cardData={cardData}/>}/>
     <Route path="favourites" element={<MyCards />}/>
    </Routes>
  )
}

export default App
