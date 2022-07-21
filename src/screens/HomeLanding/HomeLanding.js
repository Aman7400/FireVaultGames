import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import AvatarToolbar from '../../components/home-landing/AvatarToolbar'

const HomeLanding = () => {
  return (
    <View style={styles.container}>
        <SafeAreaWrapper >
            {/* Header Toolbar */}
            <AvatarToolbar />
            {/* Searchbar */}
            <View>
               <Text>
               Search Here
               </Text>
            </View>
            {/* Category Menu */}
            <View style={{flexDirection: 'row'}}>
                <Text>
                    Category
                </Text>
                <Button title='see all' />
            </View>
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