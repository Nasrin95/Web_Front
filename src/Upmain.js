import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity , TextInput } from 'react-native';
import { users } from './usersComponet'
import {setSearchItem} from './Service/action'
import{connect} from 'react-redux'

class Upmain extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
        text : '',
        users: users,
        selectedID: 2,

        }
    }
   
    setText = text  => {
        this.setState ({
            text : text
        })
    };

    render (){
        
        return(
            <View style = {styles.section1}>
                <View style = {styles.section11} >
                    <TouchableOpacity 
                    
                    underlayColor='white'
                    onPress ={() => this.props.setSearchItem(this.state.text)} >
                        <Image 
                        style = {styles.instagramImageStyle}
                        source = {require('./accest/icons/instagram.png')} />
                    </TouchableOpacity>
                    <View style ={{ marginTop : 7}}>
                        <TextInput placeholder="Type Here..."
                            value={this.state.text}
                            onChangeText={this.setText} 
                            style = {styles.input}/> 
                    </View>
                </View>
                
                <View style = {styles.section12}>
                    {
                        this.state.users.map((item,id)=>(
                            <TouchableOpacity 
                            
                                style = {styles.touchStyle}
                                underlayColor = 'white'
                                onPress = {() => this.setState({selectedID : item.id})}>
                                <View style = {this.state.selectedID !== item.id ? styles.nikeStyle1 :  styles.nikeStyle2}>
                                    <View style = {[styles.nikeStyle , {backgroundColor : item.color }]}>
                                    <Image 
                                    style = {styles.nikeImageStyle}
                                    source = {item.userPic} />
                                    {
                                        item.istagram &&
                                        <View style = {styles.smallHolder} >
                                            <View style = {styles.smallImage} >
                                            <Image 
                                            source = {require('./accest/icons/instagram (1).png')}
                                            style = {{width :20 , height : 20}} />
                                            </View>
                                        </View>
                                    }
                                    </View>
                                    
                                </View>
                            
                        </TouchableOpacity>
                    ) )
                    }
                    
                </View>
    
            </View>
        )
    }

}

const styles = StyleSheet.create({

    instagramImageStyle: {
        width: 30,
        height: 30,
        marginStart: 20,
        opacity: .8
    },

    touchStyle: {
        width: 40,
        height: 80,
        marginStart: 25
    },

    profileStyle: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    input :{
        height : 30,
        width : 250 ,
        marginStart : 10
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
        width: 40,
        height: 80
    },
    nikeStyle1: {

        opacity: .3,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 80
    },

    nikeStyle: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 40,
        height: 40
    },

    section1: {
        flex:2,
        // backgroundColor : 'red',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
       
    },
    section11: {
       
        width: 250,
        marginStart: '15',
        flexDirection: "row",
        alignItems: 'flex-start',

    },
    section12: {
        width: 200,
        marginEnd : 20,
        flexDirection: "row",
        alignItems: 'flex-start',
    },
    })

   
    export default  connect (null ,{ setSearchItem})(Upmain);