import { IMG_CDN_URL } from "../../config";
const RestaurantCard = ({
    cuisines,
    name,
    cloudinaryImageId,
    lastMileTravelString
  }) => {
    return(
      <>
      <div className="h">
  <div className="card">
  <img src={IMG_CDN_URL + cloudinaryImageId}
  />
        <h2>{name}</h2>
        <h3>{cuisines?.join(",")}</h3>
     <h3>{lastMileTravelString}</h3>
      </div>
      </div>
      </>
    )
  }
  export default RestaurantCard;