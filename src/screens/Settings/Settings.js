import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import { ubuntu } from '../../constants/fonts'

const Settings = () => {
  return (
    <SafeAreaWrapper style={styles.container}>
      <Text style={{
        fontFamily : ubuntu.ExtraBold,
        fontSize : 24,
      }}>Settings</Text>
    </SafeAreaWrapper>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  }
})