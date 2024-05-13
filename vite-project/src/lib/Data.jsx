// import { useEffect } from "react";
// import axios from "axios";

// export default function Data(){

//     const cardsURL = "https://api.magicthegathering.io/v1/cards"; 


//         axios.get(cardsURL)
//        .then((response) =>{
//         // console.log(response)
//         console.log(response.data)
//         return  response.data.cards
//         })
//         .catch((error) => console.log("error",error))


// }

import axios from "axios";

const API_URL = "https://api.magicthegathering.io/v1";
export async function fetchCards() {
  const cardsURL = `${API_URL}/cards`;
  try {
    const response = await axios.get(cardsURL);
    return response.data.cards;
  } catch (error) {
    console.log("error", error);
  }
}