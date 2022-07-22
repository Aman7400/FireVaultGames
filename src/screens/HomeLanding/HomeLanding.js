import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import AvatarToolbar from '../../components/home-landing/AvatarToolbar'
import Searchbar from '../../components/home-landing/Searchbar'
import Category from '../../components/home-landing/Category'
import TrendingGames from '../../components/home-landing/TrendingGames'
import ScrollabelSection from '../../components/home-landing/ScrollableSection'

const HomeLanding = ({navigation}) => {
  return (
    <View style={styles.container}>
        <SafeAreaWrapper >
          <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            {/* Header Toolbar */}
            <AvatarToolbar />
            {/* Searchbar */}
            <Searchbar />
            {/* Category Menu */}
            <Category />
            {/* Trending Menu */}
            <ScrollabelSection navigation={navigation} title="Trending" />
            {/* Upcoming Menu */}
            <ScrollabelSection navigation={navigation} title="Upcoming" />
          </ScrollView>
            </SafeAreaWrapper>
    </View>
  )
}

export default HomeLanding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: 36,
        paddingHorizontal :36
      },
})