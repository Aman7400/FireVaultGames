import Icon from "react-native-vector-icons/Ionicons";

const getTabIcon = ({focused,color,size},route) => {
    
        let iconName ;

        if (route.name === 'Home') {

          iconName = focused ? 'home' : 'home-outline'
                        
        } else if (route.name === 'Settings') {

          iconName = focused ? 'settings' : 'settings-outline'
                        
        } else if (route.name === 'Explore') {

          iconName = focused ? 'compass' : 'compass-outline'
                        
        }

        return <Icon name={iconName} color={focused ? 'red' : color} size={focused ? 30 : size} />

    }

export {getTabIcon}