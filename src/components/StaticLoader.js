import React from 'react'
import { Text, View } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';

const StaticLoader = () => {
  return (
    <SafeAreaWrapper>
      <Text>
        Loading...
      </Text>
    </SafeAreaWrapper>
  )
}

export default StaticLoader