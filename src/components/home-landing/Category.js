import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ubuntu } from '../../constants/fonts'
import Icon from 'react-native-vector-icons/FontAwesome5'
import categories from '../../constants/categories'

const Category = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Category</Text>
            <ScrollView
            showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                {
                    categories.map((category, i) =>
                        <CategoryItem key={i} category={category} />)
                }
            </ScrollView>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        marginBottom : 16
    },
    heading: {
        fontSize: 18,
        fontFamily: ubuntu.ExtraBold,
        marginBottom: 12
    },
    categoryItem: {
        flexDirection: 'row',
        marginRight: 16,
        backgroundColor: "#C40006",
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
    }
})

function CategoryItem({category}) {
    return (
        <TouchableOpacity onPress={() => alert(category.title)} style={styles.categoryItem}>
            <Icon name={category.iconName} size={18} color='white' />
            <Text style={{
                color: 'white',
                marginLeft:12,
                fontFamily : ubuntu.Bold,
                fontSize:18
            }}>
                {category.title}
            </Text>
           
        </TouchableOpacity>
    )
}