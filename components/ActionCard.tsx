import React from 'react'
import { StyleSheet, Text, View, Linking ,Image, TouchableOpacity} from 'react-native'

export default function ActionCard() {
    function openWebsite(link: string){
        Linking.openURL(link);
    }
    return (
        <View>
            <Text style={styles.headingText}>Action Card</Text>
            <View  style={styles.cont}>
            <View style={[styles.card,styles.elevated]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in ES12
                    </Text>
                </View>
                <Image source={{uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg'}} style={styles.cardImage}/>
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={5}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tenetur illo? Officiis iure quaerat cumque aliquam, quam ab repellendus temporibus, pariatur neque et vel dignissimos!
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                        <TouchableOpacity  onPress={()=>{openWebsite('https://www.google.com/')}}>
                            <Text style={styles.links}>Read More...</Text>
                        </TouchableOpacity>
                </View>
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
    cont:{
        flex:1,
        alignItems : 'center'
    },
    card:{
        width:350,
        height:340,
        borderRadius:6,
        margin:12
    },
    elevated:{
        backgroundColor:'silver',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowOpacity:0.3
    },
    headingContainer: {

    },
    headerText:{
        padding:8
    },
    cardImage:{
        height:100
    },
    bodyContainer:{
        padding:9
    },
    footerContainer:{
        flex:1,
        alignItems:'center',
        fontSize:16,
        padding:20,
    },
    links:{
        fontSize:16,
        color:'black',
        backgroundColor:'white',
        padding:8,
        borderRadius:4
    }

})
