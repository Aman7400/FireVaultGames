import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ubuntu } from '../../constants/fonts'
import games from '../../constants/games'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { homeStack } from '../../constants/routes'



const TrendingGames = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.heading}>Trending Games</Text>
            <Text style={styles.subHeading}>See All</Text>
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                {
                    games.trending.map((game, i) =>
                        <TredingItem key={i} game={game} onPress={() => navigation.navigate(homeStack.gameDetails)}/>)
                }
            </ScrollView>
        </View>
    )
}

export default TrendingGames

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

function TredingItem({game,onPress}){
    // let img = `${relImagePath}${game.imgUrl}`;
    return (
        <View style={{
            marginRight : 16,
            backgroundColor : '#FFFEFF',
            borderRadius:16
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