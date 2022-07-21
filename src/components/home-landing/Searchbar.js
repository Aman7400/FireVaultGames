import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ubuntu } from '../../constants/fonts'

const Searchbar = () => {
  return (
    <View style={styles.container}>
        {/* Search Icon */}
        <Icon name="search" color='grey' size={18} />
        <TextInput style={styles.input} placeholder="Search Game ..." keyboard={true}  />
        <Icon name="sliders" color='grey' size={18} />

    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FFFEFF',
        borderRadius : 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:16
    },
    input: {
        marginHorizontal : 8,
        fontSize : 18,
        flex:1,
        fontFamily : ubuntu.Medium
    }
})