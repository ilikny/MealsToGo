import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';
import { SafeArea } from "../../components/utility/safe-area.component";

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings"
};


const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map</Text>
    </SafeArea>
  );
}

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
  }
}


export const TempNav = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )

};