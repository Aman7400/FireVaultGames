import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { homeStack } from '../../constants/routes'

const GameDetail = ({navigation}) => {
  return (
    <View>
      <Text>GameDetail</Text>
      <Button title='See All' onPress={() => navigation.navigate(homeStack.allGames)}/>
    </View>
  )
}

export default GameDetail

const styles = StyleSheet.create({})