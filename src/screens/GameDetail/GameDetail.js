import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { homeStack } from '../../constants/routes'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import { ubuntu } from '../../constants/fonts'
import BackButton from '../../components/BackButton'
import games from '../../constants/games'

const GameDetail = ({route,navigation}) => {

  const {gameId} = route.params;

  const selectedGame = games.filter(games => games.id === gameId)[0]

  console.log({selectedGame});

  return (
    <SafeAreaWrapper style={{
      position: 'relative'
    }}>
      <BackButton onPress={() => navigation.goBack()}/>
      <Image style={{width:"100%",height:360}} resizeMode="cover" source={selectedGame.imgUrl} />
      <Text
      style={{
        fontFamily : ubuntu.ExtraBold,
        fontSize : 24,
        marginTop:16,
        marginHorizontal:16
      }}
      >{selectedGame.title}</Text>
      <GameStats stats={selectedGame.stats} />
      <Text style={{
        fontFamily : ubuntu.Light,
        marginHorizontal:16
      }}>
      {selectedGame.description}
      </Text>
      <TouchableOpacity
      onPress={() => navigation.navigate(homeStack.allGames)}
       style={{
        backgroundColor:'#C40006',
        margin:16,
        padding:16,
        borderRadius:16,
        justifyContent: 'center',flexDirection:"row",
      }}>
        <Text style={{
          fontSize:16,
          color:'white',
          fontFamily : ubuntu.ExtraBold
        }}>
          Intsall Game
        </Text>
      </TouchableOpacity>
    </SafeAreaWrapper>
  )
}

export default GameDetail

const styles = StyleSheet.create({})


function GameStats({stats}) {
  const {downloads,size,rating} = stats;
  return (
    <View style={{
      backgroundColor:"#E4E8EC",
      margin:16,
      borderRadius:16,
      padding:16,
      flexDirection: "row",
      justifyContent :"space-evenly"
    }}>
      {/* Download */}
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        }}>
        <Icon name="download" size={12}  color="#C40006"/>
        <Text style={{ 
          fontSize:12,
          fontFamily : ubuntu.Medium,
          marginLeft:4,
          color:"#C40006"
        }}>{downloads}M</Text>
      </View>
       {/* Rated */}
       <View style={{
        flexDirection:"row",
        alignItems:"center",
        }}>
        <Icon name="user-check" size={12}  color="#C40006" />
        <Text
        style={{ 
          fontSize:12,
          fontFamily : ubuntu.Medium,
          marginLeft:4,
          color:"#C40006"
        }}
        > {rating} Rated</Text>
      </View>
      {/* Size */}
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        }}>
        <Icon name="mobile" size={12}  color="#C40006"  />
        <Text
        style={{ 
          fontSize:12,
          fontFamily : ubuntu.Medium,
          marginLeft:4,
          color:"#C40006"
        }}
        >{size} GB</Text>
      </View>
    </View>
  )
}