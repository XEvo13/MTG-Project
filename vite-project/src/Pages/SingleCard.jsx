import { Link, useParams } from "react-router-dom"


export default function SingleCard({cardData}){

    const {multiverseid} = useParams();

    const foundCard = cardData.find((card) => card.multiverseid == multiverseid) 


    return(
        <div className="singleCard">
        <div>{foundCard.name}</div>
        <Link to={`/singleCard/${multiverseid}/edit`}>
        <div>Edit Me!</div>
        </Link>
        </div>
    )
}