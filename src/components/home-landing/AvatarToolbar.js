import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import { ubuntu } from '../../constants/fonts'

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
        backgroundColor : '#FE7F39',
        padding : 8,
        flexDirection: 'row',
        alignItems: 'center',
    }
})

function FireVaultCoinsButton() {
    return (
        <TouchableOpacity style={styles.iconButton}>
            <View style={{backgroundColor:'white',width:30,height:30,display: 'flex',alignItems: 'center',justifyContent: 'center',borderRadius : 18,}}>
                <Icon name='crown' size={15} color='#FE7F39'   />
            </View>
            <View style={{
                marginHorizontal : 4,
                marginLeft: 8
            }}>
                <Text style={{color:'white', fontFamily : ubuntu.ExtraBold,}}>2,3453</Text>
            </View>
        </TouchableOpacity>
    )
}

function PersonalGreetings() {
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
                Good Morning
            </Text>
        </View>
    )
}