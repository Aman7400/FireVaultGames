import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GetStarted = ({navigation}) => {
  return (
    <View>
      <Text>GetStarted</Text>
      <Button title='Lets Get Started' onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({})