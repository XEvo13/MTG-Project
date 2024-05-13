import { useParams } from "react-router-dom"


export default function SingleCard({cardData}){

    const {multiverseid} = useParams();

    const foundCard = cardData.find((card) => card.multiverseid == multiverseid) 


    return(

        <div>{foundCard.name}</div>

        // <div className="singleCard">
        //     <div className="cardDetails">
        //         <img />
        //         <div className="details">

        //         </div>
        //     </div>
        // </div>
    )
}