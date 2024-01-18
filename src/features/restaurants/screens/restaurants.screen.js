import React, { useContext, useState } from "react";
import styled from "styled-components/native"
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import RestaurantsInfoCard from "../components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";




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

  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  // console.log(favourites);

  return (
    <SafeArea>
      <Search 
        isFavouritesToggled={isToggled} 
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && <FavouritesBar favourites={favourites} />}
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

