import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { routes } from '../../constants/routes'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import GetStartedButton from '../../components/GetStartedButton'
import { ubuntu } from '../../constants/fonts'

const GetStarted = ({ navigation }) => {
  return (

    <View style={styles.container}>
        <SafeAreaWrapper >
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Bringing gaming into your daily routine</Text>
          <Text style={styles.subHeading}>The best games, personalised by to your gaming preferences</Text>
          <GetStartedButton title='Get started' onPress={() => navigation.navigate(routes.home)}  />
        </View>
      </SafeAreaWrapper>
    </View>
      

  )
}

export default GetStarted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom : 28,
    fontFamily : ubuntu.Bold,
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom : 64,
    fontFamily : ubuntu.Medium,
    color : 'grey'
  }
})