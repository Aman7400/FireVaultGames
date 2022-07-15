import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './src/screens/GetStarted/GetStarted';
import Home from './src/screens/Home/Home';
import GameDetail from './src/screens/GameDetail/GameDetail';
import AllGames from './src/screens/AllGames/AllGames';
import {routes} from './src/constants/routes';
import { 
  Ubuntu_300Light,
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts
} from '@expo-google-fonts/ubuntu'
import StaticLoader from './src/components/StaticLoader';


const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown : false,
      }}>
          <Stack.Screen name={routes.getStarted} component={GetStarted}  />
          <Stack.Screen name={routes.home} component={Home}  />
          <Stack.Screen name={routes.gameDetails} component={GameDetail}  />
          <Stack.Screen name={routes.allGames} component={AllGames}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}