import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { tabs } from '../constants/routes';
import Explore from '../screens/Explore/Explore';
import Settings from '../screens/Settings/Settings';
import { getTabIcon } from '../utils/tabIconGenerator';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: (props) => getTabIcon(props,route)
          })}
        >
          <Tab.Screen name={tabs.home} component={HomeStackNavigator} />
          <Tab.Screen name={tabs.explore} component={Explore} />
          <Tab.Screen name={tabs.settings} component={Settings} />
        </Tab.Navigator>
      );
}

export default TabNavigator