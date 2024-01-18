import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Spacer } from "../spacer/spacer.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites }) => {
  return (
   <FavouritesWrapper>
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    >
    {favourites.map((restaurant) => {
      const key = restaurant.name.split(" ").join("");
      return (
        <Spacer key={key} position="left" size="medium">
          <CompactRestaurantInfo restaurant={restaurant} />
        </Spacer>
      )
    })}
    </ScrollView>
   </FavouritesWrapper>
  )
}