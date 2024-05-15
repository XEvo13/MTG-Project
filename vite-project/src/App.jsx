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
import Footer from './components/Footer'
// import Navbar from './components/Navbar'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cardData,setCardData] = useState([]); 

// GET CARD DATA
  const cardsURL = "https://api.magicthegathering.io/v1/cards"; 
  useEffect(() => {
    fetchCards().then((data) => {
      setCardData(data); // IMPLEMENT TIMEOUT MISSING......
      const timeoutId= setTimeout(()=>{
        setIsLoading(false);
      },4000)
    });
  }, []);

// ADD CARD
  const addCard = (card) => setCardData([...cardData,card]);

 
// DELETE CARD FROM LIBRARY
const deleteCard = (multiverseid) => {
  setCardData(cardData.filter((card) => card.multiverseid !== multiverseid))}

// ADD TO FAVOURITES
  console.log(cardData)
  const [favourites,setFavourites] = useState([]);
  const addFavourite = (card) => setFavourites([...favourites,card]);
  console.log(favourites)

  return (
    <>
    <Routes>
     <Route path="/" element={<Homepage />}/>
     <Route path="/deckListing" element={<DeckListing cardData={cardData} isLoading={isLoading}/>}/>
     <Route path="/createCard" element={<CreateCard addCard={addCard}/>}/>
     <Route path="/singleCard/:multiverseid/edit" element ={<UpdateCard cardData={cardData} setCardData={setCardData} />}/>
     <Route path="singleCard/:multiverseid" element ={<SingleCard cardData={cardData} deleteCard={deleteCard} addFavourite={addFavourite}/>}/>
     <Route path="/favourites" element={<MyCards  favourites={favourites}/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
