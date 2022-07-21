import * as React from 'react';
import {
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts
} from '@expo-google-fonts/ubuntu'
import StaticLoader from './src/components/StaticLoader';
import MainNavigation from './src/navigation/MainNavigation';



export default function App() {

  let [fontsLoaded] = useFonts({
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) {
    console.log("Loading fonts...");
    return <StaticLoader />
  }

  return (
    <MainNavigation/>
  );
}

