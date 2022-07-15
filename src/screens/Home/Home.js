import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='View Details' onPress={() => navigation.navigate('GameDetails')}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})