import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import "./App.css";

//Pages
import Homepage from "./Pages/Homepage";
import DeckListing from "./Pages/DeckListing";
import CreateCard from "./Pages/CreateCard";
import MyCards from "./Pages/MyCards";
import SingleCard from "./Pages/SingleCard";
import UpdateCard from "./UpdateCard";
import { fetchCards } from "./lib/Data";
import Footer from "./components/Footer";
import Error from "./Pages/Error";
// import Navbar from './components/Navbar'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  // const [cardData, setCardData] = useState(
  //   JSON.parse(localStorage.getItem("cards")) || []
  // );
  // GET CARD DATA

  // useEffect(() => {
  //   if (cardData.length === 0) {
  //     console.log("fetching from API");
  //     fetchCards().then((data) => {
  //       localStorage.setItem("cards", JSON.stringify(data));
  //       // setCardData(data);
  //       const timeoutId = setTimeout(() => {
  //         setIsLoading(false);
  //       }, 4000);
  //     });
  //   }
  // }, []);

  const cardsURL = "https://api.magicthegathering.io/v1/cards";
  useEffect(() => {
    fetchCards().then((data) => {
      setCardData(data);
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    });
  }, []);

  // ADD CARD
  const addCard = (card) => setCardData([...cardData, card]);

  // DELETE CARD FROM LIBRARY
  const deleteCard = (multiverseid) => {
    setCardData(cardData.filter((card) => card.multiverseid !== multiverseid));
  };

  // ADD TO FAVOURITES
  // console.log(cardData)
  const [favourites, setFavourites] = useState([]);
  const addFavourite = (card) => setFavourites([...favourites, card]);
  console.log(favourites);

  // DELETE CARD FROM FAVOURITES
  const deleteFav = (multiverseid) => {
    setFavourites(
      favourites.filter((card) => card.multiverseid !== multiverseid)
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/deckListing"
          element={<DeckListing cardData={cardData} isLoading={isLoading} />}
        />
        <Route path="/createCard" element={<CreateCard addCard={addCard} />} />
        <Route
          path="/singleCard/:multiverseid/edit"
          element={<UpdateCard cardData={cardData} setCardData={setCardData} />}
        />
        <Route
          path="singleCard/:multiverseid"
          element={
            <SingleCard
              cardData={cardData}
              deleteCard={deleteCard}
              addFavourite={addFavourite}
              favourites={favourites}
            />
          }
        />
        <Route
          path="/favourites"
          element={<MyCards favourites={favourites} deleteFav={deleteFav} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
