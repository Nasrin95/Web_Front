import React, { Component } from 'react';
import {View , Text , StyleSheet , FlatList ,Image , TouchableHighlight , ScrollView} from 'react-native';

export default class SectionFour extends Component{
    render (){
        return (
            <View style = {styles .containerOrigin} >
               <View >
                    <Text style = {styles.fontStyle}>Instagram State OverView #1</Text>
               </View>
               <View >
                    <Text style = {styles.textFour} >Export Data</Text>
               </View>
            </View>
        )
    }
}
const styles = StyleSheet. create({
    containerOrigin :{
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginStart : 50,
        marginEnd :50
    },
  
    fontStyle :{
        fontSize : 22,
        fontWeight: '450',
    },

    textFour : {
        color: '#1aa3ff',
        fontSize : 18,
        fontWeight : '200',
    },

    imageStyle :{
        width : 15,
        height :15,
        opacity : .5 ,
        marginStart : 15,
    }
})