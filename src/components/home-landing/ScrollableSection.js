import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ubuntu } from '../../constants/fonts'
import games from '../../constants/games'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { homeStack } from '../../constants/routes'



const ScrollabelSection = ({navigation,title}) => {

    const filteredGames = games.filter(game => game.tag.includes(title))

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.heading}>{title} games</Text>
            <Text style={styles.subHeading}
            onPress={() =>navigation.navigate(homeStack.allGames,{
                tag: title
            })}
            >See All</Text>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                {
                    filteredGames.map((game, i) =>
                        <SectionGameItem key={i} game={game} onPress={() => navigation.navigate(homeStack.gameDetails,{
                            gameId: game.id
                        })}/>)
                }
            </ScrollView>
        </View>
    )
}

export default ScrollabelSection

const styles = StyleSheet.create({

    container: {
        marginBottom : 16
    },
    titleContainer : {
        flexDirection: 'row',
        justifyContent : 'space-between',alignItems: 'center',
        marginBottom:12
    },
    heading: {
        fontSize: 18,
        fontFamily: ubuntu.ExtraBold,
    },
    subHeading : {
        fontSize : 12,
        color : 'grey'
    }

})

function SectionGameItem({game,onPress}){
    return (
        <View style={{
            marginRight : 16,
            backgroundColor : '#FFFEFF',
            borderRadius:16,
            shadowColor: "#FFFFFF",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            elevation: 6,
   
        }} >
          <Image style={{width:200,height:280,borderTopLeftRadius: 16,borderTopRightRadius: 16,}} source={game.imgUrl} />
         <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',alignItems: 'center',
            padding: 16
         }}>
         <Text style={{fontFamily: ubuntu.Bold,}}>
            {game.title}
          </Text>
          <Icon onPress={onPress} name="download" size={18} color="#C40006" />
         </View>
        </View>
    )
}