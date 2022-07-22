import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { homeStack } from '../constants/routes';
import AllGames from '../screens/AllGames/AllGames';
import GameDetail from '../screens/GameDetail/GameDetail';
import HomeLanding from '../screens/HomeLanding/HomeLanding';

const Stack = createNativeStackNavigator();


const HomeStackNavigator = () => {
    return <Stack.Navigator screenOptions={{
        headerShown : false,
      }}>
          <Stack.Screen name={homeStack.landing} component={HomeLanding}  />
          <Stack.Screen name={homeStack.gameDetails} component={GameDetail}  />
          <Stack.Screen name={homeStack.allGames} options={{
            headerShown : true,
          }} component={AllGames}  />
      </Stack.Navigator>
}

export default HomeStackNavigator;