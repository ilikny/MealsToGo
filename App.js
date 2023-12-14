import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";

import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from "./src/infrastructure/theme";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Oswald_400Regular,
    Lato_400Regular
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // let [fontsLoadedLato, fontErrorL] = useLato({
  //   Lato_400Regular,
  // });
  // if (!fontsLoadedLato && !fontErrorL) {
  //   return null;
  // }

  // if(!fontsLoadedOswald || !fontsLoadedLato){
  //   return null;
  // }

  return (
    <>
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>

    <ExpoStatusBar style='auto' />
    </>
  );
}


