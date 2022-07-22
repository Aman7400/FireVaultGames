import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { homeStack } from '../../constants/routes'
import SafeAreaWrapper from '../../components/SafeAreaWrapper'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import { ubuntu } from '../../constants/fonts'
import BackButton from '../../components/BackButton'

const GameDetail = ({navigation}) => {
  return (
    <SafeAreaWrapper style={{
      position: 'relative'
    }}>
      <BackButton onPress={() => navigation.goBack()}/>
      <Image style={{width:"100%",height:360}} resizeMode="cover" source={require("../../../assets/images/games/spidy.webp")} />
      <Text
      style={{
        fontFamily : ubuntu.ExtraBold,
        fontSize : 24,
        marginTop:16,
        marginHorizontal:16
      }}
      >Spider Man</Text>
      <GameStats />
      <Text style={{
        fontFamily : ubuntu.Light,
        marginHorizontal:16
      }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor iaculis justo, vulputate volutpat urna pellentesque eu. Aenean eleifend sapien est, non ultrices dui ultrices at. Morbi a ligula efficitur, bibendum augue scelerisque, commodo lectus. Integer luctus lacinia elit sed porttitor. In tincidunt nisl eget vulputate maximus. Nullam euismod ipsum ut mauris feugiat sagittis sed eget nisi. Morbi odio elit, blandit eu est finibus, semper gravida eros. Nullam ut ultrices neque. Nunc ac finibus justo.
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


function GameStats() {
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
        }}>100M</Text>
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
        > PR Rated</Text>
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
        >1.6 GB</Text>
      </View>
    </View>
  )
}