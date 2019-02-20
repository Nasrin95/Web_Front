import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableHighlight, Animated } from 'react-native';
import { data } from './DataComponet';
import Header from './Header'
import BioComponent from './BioComponent'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import { users } from './usersComponet'
import{connect} from 'react-redux'

export default class Main extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
        users: users,
        selectedID: 2,
        }
    }
    
    
    onPressImage = () => { }
    
    render() {
        
        return (
      
            <View style = {styles.mainStyle}>
                <View style = {styles.section1}>
                    <View style = {styles.section11} >
                        <Image 
                        style = {styles.instagramImageStyle}
                        source = {require('./accest/icons/instagram.png')} />
                        <View style ={{ marginTop : 7}}>
                        <Text style = {styles.text11}> Search Instagram</Text>
                        </View>
                    </View>
                    
                    <View style = {styles.section12}>
                        {
                            this.state.users.map((item,id)=>(
                                <TouchableHighlight 
                                
                                style = {styles.touchStyle}
                                underlayColor = 'white'
                                onPress = {() => this.setState({selectedID : item.id})}>
                                <View style = {this.state.selectedID !== item.id ? styles.nikeStyle1 :  styles.nikeStyle2}>
                                    <View style = {[styles.nikeStyle , {backgroundColor : item.color }]}>
                                    <Image 
                                    style = {styles.nikeImageStyle}
                                    source = {item.userPic} />
                                    {
                                        item.istagram ?
                                        ( <View style = {styles.smallHolder} >
                                            <View style = {styles.smallImage} >
                                            <Image 
                                            source = {require('./accest/icons/instagram (1).png')}
                                            style = {{width :20 , height : 20}} />
                                            </View>
                                        </View>)
                                        :
                                        (<View></View> )
                                    }
                                    </View>
                                    
                                </View>
                                
                            </TouchableHighlight>
                        ) )
                        }
                        
                    </View>
    
                </View>
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

    instagramImageStyle: {
        width: 30,
        height: 30,
        marginStart: 20,
        opacity: .2
    },

    profileStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    nikeImageStyle: {
        width: 40,
        height: 40,
        // opacity:.6,
        borderRadius: 50,
    },
    smallHolder: {
        backgroundColor: 'white',
        position: 'absolute',
        marginStart: 20,
        borderRadius: 50
    },
    smallImage: {
        width: 20,
        height: 20,
        // opacity : .6,
        borderRadius: 50,
    },
    smallImage2: {
        width: 20,
        height: 20,
        marginBottom: 12,
        borderRadius: 50,
    },
    imageStyle: {
        width: 45,
        height: 45,
        borderRadius: 50,
        marginBottom: 10
    },

    nikeStyle2: {

        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        // marginStart : 20,
        // backgroundColor : "red" ,
        // opacity:.4 ,

        width: 40,
        height: 80
    },
    nikeStyle1: {

        opacity: .3,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        // marginStart : 20,
        // backgroundColor : "red" ,
        // opacity:.4 ,

        width: 40,
        height: 80
    },

    nikeStyle: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        // marginStart : 20,
        // backgroundColor : "red" ,
        // opacity:.4 ,
        borderRadius: 50,
        width: 40,
        height: 40
    },
    asideStyle: {
        width: 70,
        alignItems: 'flex-start',
        borderTopLeftRadius: 20

    },

    mainStyle: {
        flex: 15,
        // backgroundColor : "yellow"
    },
    touchStyle: {
        width: 40,
        height: 80,
        marginStart: 25
    },

    section1: {
        flex: 2,
        flexDirection: "row",
        // backgroundColor : "yellow",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    section11: {
        width: 250,
        marginStart: '15',
        // flex : 1,
        flexDirection: "row",
        // backgroundColor : "yellow",
        alignItems: 'flex-start',

    },
    section12: {
        width: 200,
        // marginStart :750,
        // flex : 1,
        marginEnd : 20,
        flexDirection: "row",
        // backgroundColor : "green",
        alignItems: 'flex-start',
    },

    section2: {
        flex: 8,
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
        flex: 6,
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
        flex: 1.5,
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
        flex: 8,
        flexDirection: "row",
        backgroundColor: 'rgb(240,240,240)',
    },

    })

   