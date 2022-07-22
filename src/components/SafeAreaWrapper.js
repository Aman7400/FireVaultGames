import React from 'react'
import { SafeAreaView } from 'react-native'

const SafeAreaWrapper = ({children, style}) => {
  return (
    <SafeAreaView style={style || {}}>
        {children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper