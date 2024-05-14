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
import Navbar from './components/Navbar'

function App() {

  const [cardData,setCardData] = useState([]); 
 
// GET CARD DATA
  const cardsURL = "https://api.magicthegathering.io/v1/cards"; 
  useEffect(() => {
    fetchCards().then((data) => {
      setCardData(data);
    });
  }, []);

// ADD CARD
  const addCard = (card) => setCardData([...cardData,card]);
 
// DELETE CARD
const deleteCard = (multiverseid) => {
  setCardData(cardData.filter((card) => card.multiverseid !== multiverseid))}

// ADD TO FAVOURITES
 
  /* setFavourites(cardData) */
  // useEffect(()=>{
  //   setFavourites(cardData)
  // }, [])
  console.log(cardData)
  const [favourites,setFavourites] = useState([]);
  const addFavourite = (card) => setFavourites([...favourites,card]);
  console.log(favourites)
  // const test = fetchCards();
  // console.log(test)
  return (
    <>
    <Navbar />
    <Routes>
     <Route path="/" element={<Homepage />}/>
     <Route path="/deckListing" element={<DeckListing cardData={cardData}/>}/>
     <Route path="/createCard" element={<CreateCard addCard={addCard}/>}/>
     <Route path="/singleCard/:multiverseid/edit" element ={<UpdateCard cardData={cardData} setCardData={setCardData} />}/>
     <Route path="singleCard/:multiverseid" element ={<SingleCard cardData={cardData} deleteCard={deleteCard} addFavourite={addFavourite}/>}/>
     <Route path="/favourites" element={<MyCards  favourites={favourites}/>}/>
    </Routes>
    </>
  )
}

export default App
