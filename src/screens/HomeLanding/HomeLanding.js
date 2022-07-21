import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import AvatarToolbar from '../../components/home-landing/AvatarToolbar'
import Searchbar from '../../components/home-landing/Searchbar'
import Category from '../../components/home-landing/Category'
import TrendingGames from '../../components/home-landing/TrendingGames'

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
            <TrendingGames />
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