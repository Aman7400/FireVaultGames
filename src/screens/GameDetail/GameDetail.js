import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameDetail = ({navigation}) => {
  return (
    <View>
      <Text>GameDetail</Text>
      <Button title='See All' onPress={() => navigation.navigate('AllGames')}/>

    </View>
  )
}

export default GameDetail

const styles = StyleSheet.create({})