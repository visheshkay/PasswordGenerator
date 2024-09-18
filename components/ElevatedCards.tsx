import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card,styles.elevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card,styles.elevated]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card,styles.elevated]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card,styles.elevated]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card,styles.elevated]}>
                    <Text>for more...</Text>
                </View>
            </ScrollView>
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
        padding:10,

    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        borderRadius:5,
        marginHorizontal:8


    },
    elevated:{
        backgroundColor:'lightgreen',
        elevation:10,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'orange'
    }
})
