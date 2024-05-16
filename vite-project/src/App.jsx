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

    // TO DO:
    // get item cards from localstorage
    const cardsLS =  JSON.parse(localStorage.getItem("cards"))

    console.log("cards",cardsLS)
    // if cards, setstate with value of cards
    // {cardsLS && setCardData(cardsLS)}
    // if no cards in localstorage fetchcards()
    if(cardsLS.length === 0) {
    fetchCards().then((data) => {
      localStorage.setItem("cards", JSON.stringify(data))
      // setCardData(data); 
      const timeoutId= setTimeout(()=>{
        setIsLoading(false);
      },4000)
    })}

    else{
      console.log("no fetching")
      setCardData(cardsLS)
    }
  }, []);

// ADD CARD
  const addCard = (card) => setCardData([...cardData,card]);

 
// DELETE CARD FROM LIBRARY
const deleteCard = (multiverseid) => {
  setCardData(cardData.filter((card) => card.multiverseid !== multiverseid))}

// ADD TO FAVOURITES
  // console.log(cardData)
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
