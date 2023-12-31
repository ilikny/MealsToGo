import React, { useState } from "react";
import styled from "styled-components/native"
import { Searchbar } from 'react-native-paper';
import { StatusBar } from 'react-native';
import RestaurantsInfoCard from "../components/restaurants-info-card.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;


const RestaurantsScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);


  return (
    <SafeArea>

      <SearchContainer>
        <Searchbar
           placeholder="Search"
           onChangeText={onChangeSearch}
           value={searchQuery}
        />
      </SearchContainer>

      <RestaurantListContainer>
        <RestaurantsInfoCard />
      </RestaurantListContainer>
      
    </SafeArea>
  )
}
export default RestaurantsScreen

