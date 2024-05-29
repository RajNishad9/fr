import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
console.log("outside");
const RestaurantMenu = () => {
  const { resId } = useParams();

 const menuInfo = useRestaurantMenu(resId);
//  console.log('menuInfo:', menuInfo);
//  console.log('menuInfo?.cards:', menuInfo?.cards);
//  console.log('menuInfo?.cards[2]:', menuInfo?.cards[2]);
//  console.log('menuInfo?.cards[2]?.card:', menuInfo?.cards[2]?.card);
//  console.log('menuInfo?.cards[2]?.card?.card:', menuInfo?.cards[2]?.card?.card);
//  console.log('menuInfo?.cards[2]?.card?.card?.info:', menuInfo?.cards[2]?.card?.card?.info);

  if (menuInfo === null) return  <Shimmer/>;

  // if not null then do this
  const { name, cuisines, costForTwoMessage } = menuInfo?.cards[2]?.card?.card?.info;

  const { itemCards } = menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards);
 
  // const isOnline = useOnlineOffline();
  // if (!isOnline) {
  //   return <h1>Sorry, it seems you are offline.</h1>;
  // }

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwoMessage}</h2>
      <hr></hr>
      <h1>Menus :-------</h1>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -- Rs{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
              <button className="p-2 m-2 bg-green-400">ADD</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
