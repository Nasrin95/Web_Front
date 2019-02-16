import React, { Component } from 'react';
import {View , Text , StyleSheet , FlatList ,Image , TouchableHighlight} from 'react-native';

export default class SectionThree extends Component{
    render (){
        return (
            <View style = {styles .containerOrigin} >
               <View style = {styles .container}>
                <View style = {styles.tectContainer}>
                        <Text style = {styles.textFour} >Media(1K)</Text>
                    </View >
                    <View style = {[styles.tectContainer , {borderBottomWidth : 2 , borderBottomColor : 'blue'}]}>
                        <Text style = {styles.fontStyle} >Analytics</Text>
                    </View>
               </View>
               <View style = {[styles .container ,{justifyContent : 'flex-end' , marginEnd : 40 , alignItems : 'center'}]}>
                    
                    <Text style = {styles.textFour}>Date</Text>
                    <Text style = {[styles.fontStyle , {opacity : .6}]}> Last 30 Days</Text>
                    <Image 
                    source = {require('./accest/icons/down-arrow.png')}
                    style ={styles.imageStyle} />
                
               </View>
            </View>
        )
    }
}
const styles = StyleSheet. create({
    containerOrigin :{
        flex : 1,
        flexDirection : 'row',
        alignItems : 'space-between'
    },
    container :{
        flex : 1,
        flexDirection : 'row',
    },
    fontStyle :{
        fontSize : 18,
        fontWeight: '450'
    },
    tectContainer :{
        marginStart : 35,
        alignItems : 'center',
    },
    textFour : {
        color: '#808080',
        fontSize : 18,
        fontWeight : '350',
    },

    imageStyle :{
        width : 15,
        height :15,
        opacity : .5 ,
        marginStart : 15,
    }
})