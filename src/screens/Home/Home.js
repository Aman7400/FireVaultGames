import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { routes } from '../../constants/routes'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title='View Details' onPress={() => navigation.navigate(routes.gameDetails)}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})