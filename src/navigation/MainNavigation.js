
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigator from './TabNavigator'

const MainNavigation = () => {
    console.log("Loading Navigation...");
  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  )
}

export default MainNavigation
