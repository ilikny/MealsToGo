import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from "./src/infrastructure/theme";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";


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
      <FavouritesContextProvider>
       <LocationContextProvider>
        <RestaurantContextProvider>
         <Navigation />
        </RestaurantContextProvider>
       </LocationContextProvider>
      </FavouritesContextProvider>
    </ThemeProvider>

    <ExpoStatusBar style='auto' />
    </>
  );
}


