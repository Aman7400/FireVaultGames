import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import BackButton from '../../components/BackButton'
import games from '../../constants/games'
import { useNavigation } from '@react-navigation/native';
import { homeStack } from '../../constants/routes'
import { ubuntu } from '../../constants/fonts'


const AllGames = ({ navigation, route }) => {
  const { tag } = route.params;

  // * Set Title Dynamically
  useEffect(() => {

    navigation.setOptions({
      title: `All ${tag} games`
    })

  }, [])

  const filteredGames = games.filter(game => game.tag.includes(tag))

  return (
    <View style={styles.container}  >
      <ScrollView showsVerticalScrollIndicator={false} vertical={true}>

        {
          filteredGames.map((game, i) => <AllGamesItem key={i} game={game} />)
        }



      </ScrollView>
    </View>
  )
}

export default AllGames

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row"
  },
  allGamesItemWrapper: {
    height: 120,
    marginBottom: 12,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 16,
    shadowColor: "#F0F0F0",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  }
})

const AllGamesItem = ({ game }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.allGamesItemWrapper}>

      <View style={{ flex: 1 }}>
        <Image source={game.imgUrl} style={{
          width: "100%", height: "100%",
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,

        }} />
      </View>

      <View style={{ flex: 2, padding: 8 }}>
        <Text style={{
          fontSize: 16,
          fontFamily: ubuntu.ExtraBold,
          marginVertical: 2
        }}>{game.title}</Text>
        <Text style={{
          fontSize: 8,
          fontFamily: ubuntu.ExtraBold,
          color: "grey",
          marginVertical: 2
        }}>{game.description.substring(0, 150)}...</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#C40006",
            padding: 12,
            alignItems: "center",
            borderRadius: 8,
            marginVertical: 5
          }}
          onPress={() => navigation.navigate(homeStack.gameDetails, {
            gameId: game.id,
          })}>

          <Text style={{
            fontSize: 16,
            color: "white",
            fontFamily: ubuntu.Bold
          }}>
            View Details
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  )
}