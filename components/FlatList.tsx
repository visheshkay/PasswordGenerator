import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'

const FlatList = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style = {styles.container}>
                <View style={[styles.card,styles.card1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card,styles.card2]}>
                <Text>Green</Text>
                </View>
                <View style={[styles.card,styles.card3]}>
                <Text>Blue</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:9

    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:9
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:4,
        margin:8
    },
    card1:{
        backgroundColor:'red'
    },
    card2:{
        backgroundColor:'green'
    },
    card3:{
        backgroundColor:'blue'
    }
})

export default FlatList
