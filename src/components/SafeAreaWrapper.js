import React from 'react'
import { SafeAreaView } from 'react-native'

const SafeAreaWrapper = ({children, style}) => {
  return (
    <SafeAreaView>
        {children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper