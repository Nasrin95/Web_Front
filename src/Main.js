import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Animated } from 'react-native';
import { data } from './DataComponet';
import Header from './Header'
import BioComponent from './BioComponent'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'



export default class Main extends Component{

    onPressImage = () => { }
    
    render() {
        
        return (
      
            <View style = {styles.mainStyle}>
                <View style = {styles.section2}>
                    <View style = {styles.section21} >
                        <Image
                        style = {styles.profileStyle}
                        source = {require('./accest/4.jpg')}
                        />
                    </View >
                    
                    <View style = {styles.section22}>
                        <BioComponent/>
                    </View>
                    <View style = {styles.section23}>
                        <TouchableHighlight
                        onPress = {() => {}}
                        style = {styles.section231Temp} >
                            <View style = {styles.section231} >
                            <Image 
                            style = {styles.toolImage} 
                            source = {require('./accest/icons/message-closed-envelope.png')} />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                        onPress = {() => {}}
                        style = {styles.section231Temp} >
                            <View style = {styles.section231} >
                            <Image 
                            style = {styles.toolImage} 
                            source = {require('./accest/icons/more.png')} />
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style = {styles.section3}>
                <SectionThree/>
                </View >
                <View style = {styles.section4}>
                <SectionFour/>
                </View>
                <View style = {styles.section5}>
                <SectionFive/>
                </View>
            </View>
        
        );
    }
    }
      
const styles = StyleSheet.create({

    profileStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
 
    mainStyle: {
        flex: 11,
        // backgroundColor : "yellow"
    },

    section2: {
        flex: 9,
        marginStart: 20,
        marginEnd: 20,
        flexDirection: "row",
        // backgroundColor : "red"
    },
    section21: {
        flex: 1,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor :'red'
    },
    section22: {
        flex: 4,
        marginBottom: 15,
        // backgroundColor :'green'
    },
    section23: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
        flexDirection: 'row',
        // backgroundColor :'yellow'
    },
    section231Temp: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'rgb(240 , 240, 240)',
        marginEnd: 25,
        marginTop: 25,
    },
    section231: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'rgb(240 , 240, 240)',
    },
    toolImage: {
        width: 20,
        height: 20,
    },

    section3: {
        flex: 2,
        flexDirection: "row",
        // backgroundColor : "blue"
    },
    section4: {
        backgroundColor: 'rgb(240,240,240)',
        flex: 2,
        flexDirection: "row",
        // backgroundColor : "pink"
    },
    section5: {
        flex: 9,
        flexDirection: "row",
        backgroundColor: 'rgb(240,240,240)',
    },

    })

   