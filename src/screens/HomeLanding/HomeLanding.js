import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import AvatarToolbar from '../../components/home-landing/AvatarToolbar'
import Searchbar from '../../components/home-landing/Searchbar'
import Category from '../../components/home-landing/Category'

const HomeLanding = () => {
  return (
    <View style={styles.container}>
        <SafeAreaWrapper >
            {/* Header Toolbar */}
            <AvatarToolbar />
            {/* Searchbar */}
            <Searchbar />
            {/* Category Menu */}
            <Category />
            {/* Trending Menu */}
            <View style={{flexDirection: 'row'}}>
                <Text>
                    Trending Games
                </Text>
                <Button title='see all' />
            </View>
      </SafeAreaWrapper>
    </View>
  )
}

export default HomeLanding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        padding: 36,
        paddingTop : 64
      },
})