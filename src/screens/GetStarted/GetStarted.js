import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { routes } from '../../constants/routes'

const GetStarted = ({navigation}) => {
  return (
    <View>
      <Text>GetStarted</Text>
      <Button title='Lets Get Started' onPress={() => navigation.navigate(routes.home)}/>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({})