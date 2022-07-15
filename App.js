import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './src/screens/GetStarted/GetStarted';
import Home from './src/screens/Home/Home';
import GameDetail from './src/screens/GameDetail/GameDetail';
import AllGames from './src/screens/AllGames/AllGames';
import {routes} from './src/constants/routes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name={routes.getStarted} component={GetStarted}  />
          <Stack.Screen name={routes.home} component={Home}  />
          <Stack.Screen name={routes.gameDetails} component={GameDetail}  />
          <Stack.Screen name={routes.allGames} component={AllGames}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}