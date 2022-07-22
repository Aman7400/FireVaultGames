import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import { ubuntu } from '../../constants/fonts'
import grettings from '../../utils/grettings'

const AvatarToolbar = () => {
  return (
    <View style={styles.container}>
        <PersonalGreetings />
        <FireVaultCoinsButton />
    </View>
  )
}

export default AvatarToolbar

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',
    },
    iconButton: {
        borderRadius : 24,
        backgroundColor : '#C40006',
        padding : 8,
        flexDirection: 'row',
        alignItems: 'center',
    }
})

function FireVaultCoinsButton() {

    const [showCoins,setShowCoins] = useState(false);


    return (
        <TouchableOpacity style={styles.iconButton}>
            <TouchableOpacity onPress={() => setShowCoins(!showCoins)} style={{backgroundColor:'white',width:30,height:30,display: 'flex',alignItems: 'center',justifyContent: 'center',borderRadius : 18,}}>
                <Icon name='crown' size={15} color="#C40006"   />
            </TouchableOpacity>
           {
            showCoins && 
             <View style={{
                marginHorizontal : 4,
                marginLeft: 8
            }}>
                <Text style={{color:'white', fontFamily : ubuntu.ExtraBold,}}>2,3453</Text>
            </View>
           }
        </TouchableOpacity>
    )
}

function PersonalGreetings() {
    let greeting = grettings()
    return (
        <View>
            <Text style={{
                fontFamily: ubuntu.ExtraBold,
                color: 'grey',fontSize: 24
            }}>
                Hi, Aman
            </Text>
            <Text style={{
                fontFamily: ubuntu.Medium,
                color: 'gray',fontSize: 16
            }}>
                {greeting}
            </Text>
        </View>
    )
}