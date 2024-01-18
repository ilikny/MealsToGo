import React, { useState, useContext } from "react";
import styled from "styled-components/native"
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import RestaurantsInfoCard from "../components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";




const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantsScreen = ({ navigation }) => {

  const {isLoading, error, restaurants } = useContext(RestaurantsContext);

  // console.log(navigation);


  return (
    <SafeArea>
      <Search/>

      {isLoading ?
      <LoadingContainer>
      <Loading 
        size={50}
        animating={true} 
        color={MD2Colors.blue300} 
      />
      </LoadingContainer>
      :
        <RestaurantList 
          data={restaurants}
          renderItem={({ item }) => { 
            return (
          <TouchableOpacity 
          onPress={() => navigation.navigate("RestaurantDetail", {restaurant: item,
          })}
          >
          <Spacer position="bottom" size="large">
            <RestaurantsInfoCard restaurant={item}/>
          </Spacer>
          </TouchableOpacity>
          );}}
          keyExtractor={(item) => item.name}
        />
        }
      
    </SafeArea>
  )
}
export default RestaurantsScreen

