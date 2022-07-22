import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import  Icon from 'react-native-vector-icons/FontAwesome5'

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name="angle-left" size={24} />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top:64,
        zIndex:4,
        left : 16,
        height: 48,
        width: 48,
        borderRadius : '50%',
        backgroundColor:"#FFFFFF80",
        justifyContent: 'center',
        alignItems: 'center',
    }
})