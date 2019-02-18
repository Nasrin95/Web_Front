import React, { Component } from 'react';
import {View , Text , StyleSheet , Picker , TouchableHighlight} from 'react-native';
import {contex} from './contexComponet'

export default class SectionThree extends Component{
    constructor (props){
        super(props);
        this.state = {
            contex : contex,
            count :'',
            selectedC :''
        }
    }
    render (){
        return (
            <View style = {styles .containerOrigin} >
               <View style = {styles .container}>
               {
                    this.state.contex.map((item,id)=>(
                    <TouchableHighlight 
                    style = {styles.tectContainer}
                    underlayColor = 'white'
                    onPress = {() => this.setState({selectedc : item.id})}>
                    
                    <View style = {this.state.selectedc !== item.id ? styles.tectContainer :  [styles.tectContainer , {borderBottomWidth : 2 , borderBottomColor : 'blue'}]}>
                        <Text style = {this.state.selectedc !== item.id ? styles.textFour : styles.fontStyle } >{item.text}</Text>
                    </View>
                    
                    </TouchableHighlight>
                ) )
                }
                    {/* <View style = {styles.tectContainer}>
                        <Text style = {styles.textFour} >Media(1K)</Text>
                    </View >
                    <View style = {[styles.tectContainer , {borderBottomWidth : 2 , borderBottomColor : 'blue'}]}>
                        <Text style = {styles.fontStyle} >Analytics</Text>
                    </View> */}
               </View>
               
               {/* <View style = {[styles .container ,{justifyContent : 'flex-end' , marginEnd : 40 , alignItems : 'center'}]}>
                    
                    <Text style = {styles.textFour}>Date</Text>
                    <Text style = {[styles.fontStyle , {opacity : .6}]}> Last 30 Days</Text>
                    <Image 
                    source = {require('./accest/icons/down-arrow.png')}
                    style ={styles.imageStyle} />
                
               </View> */}
               <View style = {[styles .container , styles.pickerStyle , {height : 20,}]}>
                    <Picker selectedValue = {this.state.language}
                    // itemStyle={{ backgroundColor: "red"}} 
                    style = {{borderColor : 'white',}}
                    onValueChange = {itemValue => this.setState({count : itemValue})}>
                     
                     <Picker.Item label = "Date" value = "item one" />
                    <Picker.Item label = "Date Last 30 Days" color="blue" value = "item one" />
                    <Picker.Item label = "Date Last 20 Days" value = "item two" />
                    <Picker.Item label = "Date Last 10 Days" color="blue" value = "item three" />
                    <Picker.Item label = "Date Last 5 Days"  value = "item four" />
                    </Picker>
                
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
        height : 40,
        marginStart : 35,
        alignItems : 'center',
    },
    textFour : {
        color: '#808080',
        fontSize : 18,
        fontWeight : '350',
    },
    pickerStyle :{
        justifyContent : 'flex-end' , 
        marginEnd : 40 , 
        alignItems : 'center',
        
        
    },
    imageStyle :{
        width : 15,
        height :15,
        opacity : .5 ,
        marginStart : 15,
    }
})