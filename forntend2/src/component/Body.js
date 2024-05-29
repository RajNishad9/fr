import { useEffect, useState } from "react";
import { resList } from "../../config";
import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { SWIGGY_API_URL } from "../utils/constants";


function filterdata(searchtext,restraunt){
  const filterd=restraunt?.filter((restraunt)=>
    restraunt?.data?.name?.toLowerCase() .includes(searchtext.toLowerCase())

  );
  return filterd;
} 
const Body = () => { 
  const [restraunt,setrestraunt]=useState([]);
  const [searchtext,setsearchtext]=useState("");
  useEffect(()=>{
    getRestaurants()
  },[]);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    const restt = await checkJsonData(json);
    setrestraunt(restt);
    // setFilteredRestaurant(restt);
  }


    return restraunt.length===0?( 
       <Shimmer/>
  ):(
    
<>
<div className="search-container">
  <input
  type="text"
  className="search-text"
  placeholder="search"
  value={searchtext}
  onChange={(e)=>{
    setsearchtext(e.target.value)
  }}

  />
  <button className="search-text"
  onClick={()=>{
    const data=filterdata(searchtext,restraunt);
    setrestraunt(data);
  }}
  >search</button>
</div>
      <div className="restraunt">
      
  {
    restraunt?.map((restaurant)=>{
        return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );

    })
  }
      
      </div>
      </>
    );
  };
  export default Body;
  