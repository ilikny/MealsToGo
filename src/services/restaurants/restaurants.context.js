import React, { useState, createContext, useEffect, useContext } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((results) => {
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err)
      })
    }, 2000)
  };

  useEffect(() => {
    if (location){
    const locationString = `${location.lat},${location.lng}`;
    // console.log(locationString);
    retrieveRestaurants(locationString);
    }
  },[location]);

  // console.log(restaurants);
  return (
    <RestaurantsContext.Provider 
    value={{
      restaurants,
      isLoading,
      error
    }}>
      {children}
    </RestaurantsContext.Provider>
  )
}