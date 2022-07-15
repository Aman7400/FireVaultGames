import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ubuntu } from '../constants/fonts';

const GetStartedButton = ({title,onPress}) => {
  return (
    <View style={styles.container}  >
      <View style={styles.textSection}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
        <TouchableOpacity style={styles.iconSection} onPress={onPress} >
            <Icon name='arrow-right' size={15} color='#E52849'   />
        </TouchableOpacity>
    </View>
  )
}

export default GetStartedButton

const styles = StyleSheet.create({
    container: {
        borderRadius : 40,
        width: '100%',
        backgroundColor :'#E52849',
        padding : 16,
        flexDirection : 'row',
    },
    textSection : {
        flex : 3,
        paddingLeft : 24,
        justifyContent : 'center'
    },
    text : {
        color : 'white',
        fontSize : 24,
        fontFamily : ubuntu.ExtraBold,
    },
    iconSection : {
        height : 40,
        width : 40,
        borderRadius : 50,
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center',
    }
})