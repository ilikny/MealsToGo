import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from "./src/infrastructure/theme";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const Tab = createBottomTabNavigator();

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


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  }
}


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Oswald_400Regular,
    Lato_400Regular
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <>
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
      <RestaurantContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      </RestaurantContextProvider>
      </LocationContextProvider>
    </ThemeProvider>

    <ExpoStatusBar style='auto' />
    </>
  );
}


