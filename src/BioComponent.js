import React, { Component } from 'react';
import {View , Text , StyleSheet , FlatList ,Image , TouchableHighlight} from 'react-native';

export default class BioComponent extends Component{
    render(){
        return(
            <View style = {styles.container} >
                <View style = {styles.State1} >
                    <View style = {styles.State11} >
                        <View style = {styles.State111}>
                            <Text
                            style = {styles.textOne} >amanda_nash</Text>
                            <Image 
                            style = {styles.starImageStyle} 
                            source = {require('./accest/icons/star.png')}/>

                        </View>
                        <View style = {styles.State112}>
                            <Text style = {styles.textTwo}>Amanda Nash</Text>
                        </View>
                    </View>
                    <View style = {styles.State12} >
                        <View style = {styles.State121}>
                             <Text style = {styles.textThree} >LifeStyle</Text>
                        </View>
                        <View style = {styles.State121}>
                             <Text style = {styles.textThree} >Music</Text>
                        </View>
                    </View>
                </View>

                <View style = {styles.State2} >
                    <View style = {styles.State21}>
                        <Text style = {styles.textOne}>1,022</Text>
                        <Text style = {styles.textTwoP}>Posts</Text>
                    </View>
                    <View style = {[styles.State21 ]}>
                        <Text style = {styles.textOne}>47.2K</Text>
                        <Text style = {styles.textTwoP}>Followers</Text>
                    </View>
                    <View style = {[styles.State21 , {marginStart : 40,}]}>
                        <Text style = {styles.textOne}>652</Text>
                        <Text style = {styles.textTwoP}>Following</Text>
                    </View>
                </View>
                
                <View style = {styles.State3} >
                    <Text style ={styles.textFour} >Well, I’m neither upset nor embarrassed, but my head is full of heavy and sophisticated thoughts. Please, leave me alone. My inner man needs some oxygen.</Text>
                </View>

                <View style = {styles.State4} >
                    <View style ={styles.State41}>
                        <View style ={[styles.State41P , { backgroundColor :'rgba(255,99,99 , 0.3)'}]} >
                            <Image 
                            source ={require('./accest/icons/fire.png')}
                            style = {styles.lastImageStyle} />
                        </View>
                    </View>
                    <View style = {[styles.State41 , {marginStart :10 , backgroundColor :' rgba(180,113,255 , 0.3)'}]}>
                        <View style ={styles.State41P} >
                            <Image 
                            source ={require('./accest/icons/winner-trophy-for-the-best.png')}
                            style = {styles.lastImageStyle} />
                        </View>
                    </View>
                    <View style ={[styles.State41 , {marginStart :10 , backgroundColor :' rgba(255,255,113 , 0.3)'}]}>
                        <View style ={styles.State41P} >
                            <Image 
                            source ={require('./accest/icons/medal.png')}
                            style = {styles.lastImageStyle} />
                        </View>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet. create({
    container :{
        flex : 1,
    },
    State1 :{
        flex : 1.5,
        flexDirection : 'row',
        marginStart : 40 ,
        // backgroundColor: 'red',
        
    },
    State11 :{
        // flex : 1,
        width : 200,
        justifyContent: 'center',
        // backgroundColor: 'pink',
        
    },
    State111 :{
        flex : 1,
        flexDirection : 'row',
        // justifyContent: 'center',
        alignItems : 'center',
        // backgroundColor: 'yellow'
    },
    textOne :{
        fontSize : 23,
        fontWeight: '500'
    },
    starImageStyle :{
        width : 35,
        height : 35,
        marginStart : 5
    },
    State112 :{
        flex : 1,
        // alignItems : 'center',
        // backgroundColor: 'red'
        // flexDirection : 'row',
    },
    textTwo : {
        color: '#808080',
        fontSize : 17,
        fontWeight : '350',
        opacity : 0.85,
    },
    State12 :{
        // flex : 1,
        width : 200,
        alignItems : 'center',
        flexDirection : 'row',
        // backgroundColor: 'blue',
    },
    State121 :{
        width :100,
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#efefef',
        borderRadius : 4,
        marginStart : 20
    },
    textThree :{
        // backgroundColor : '#9e9e9e',
        fontSize :16,
        fontWeight : '450',
       
    },
    State2 :{
        flex : 1,
        marginTop : 15,
        // backgroundColor: 'yellow',
        flexDirection : 'row',
        marginStart : 40 ,
    },
    State21 : {
        // flex :1,
        width :140 ,
        flexDirection : 'row',
        alignItems : 'center',
        // justifyContent : 'center',
        // marginStart : 10,
    },

    textTwoP : {
        color: '#808080',
        fontSize : 17,
        fontWeight : '400',
        opacity : 0.85,
        marginStart : 10,
    },
    State3 :{
        flex : 1.5,
        marginTop : 15,
        // backgroundColor: 'green',
        marginStart : 40 ,
    },
    textFour : {
        color: '#808080',
        fontSize : 16,
        fontWeight : '350',
    },
    State4 :{
        flex : 1,
        flexDirection : 'row',
        marginStart : 40 ,
        marginTop : 25,
    },
    State41 : {
        width : 30,
        height : 30,
        borderRadius : 50,
        // backgroundColor :'red',
        // shadowOffset:{  width: 0,  height: 4,  },
        // shadowColor: '#white',
        // shadowOpacity: 0.2,
        shadowOffset:{  width: 0,  height: 9,  },
        shadowColor: '#9e9e9e',
        shadowOpacity: 0.2,
        // elevation : 15, //doesn't work
    },
    State41P : {
        width : 30,
        height : 30,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 50,
        // backgroundColor :'red',
        shadowOffset:{  width: 0,  height: 4,  },
        shadowColor: '#ffffff',
        
    },
    lastImageStyle : {
        width : 15,
        height : 15,
    }
})