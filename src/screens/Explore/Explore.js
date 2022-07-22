import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import { ubuntu } from '../../constants/fonts'

const Explore = () => {
  return (
    <SafeAreaWrapper style={styles.container}>
      <Text style={{
        fontFamily : ubuntu.ExtraBold,
        fontSize : 24,
      }}>Explore Section Coming Soon</Text>
    </SafeAreaWrapper>
  )
}

export default Explore

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems: "center",
    flex:1
  }
})