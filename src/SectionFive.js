import React, { Component } from 'react';
import {View , Text , StyleSheet , FlatList ,Image } from 'react-native';
import {data}  from './Sticky'


export default class SectionFive extends Component{
    render (){
        return (
            <View style = {styles .containerOrigin}>
                <FlatList
                    data = {data}
                    style={{ flex : 1 ,  }}
                    keyExtractor={item => item}
                    horizontal={false}
                    numColumns = {3}
                    columnWrapperStyle={{justifyContent : 'space-between'}}
                    renderItem={({item}) =>( 
                    <View style = {styles.stickyStyle}>
                        <View style = {styles.rowOne} >
                            <Text style = {styles.textOne} >{item.date}</Text>
                            <View style ={{width:50, height:50 ,borderRadius : 50 , justifyContent :'center'  , alignItems : 'center', backgroundColor : item.viewColor}}>
                                <Image style ={{width:45, height:45}}
                                source = {item.img1}/>
                            </View>

                        </View > 
                           
                        <View style = {{marginStart : 20}}>
                        <Text style = {styles.textTwo} >{item.mainText}</Text>
                        </View> 

                        <View style = {styles.rowOne}>
                           <View style = {{flexDirection :'row'}}>
                                {item.profit ? (
                                    <View style ={styles.smallView} >
                                        <Image style = {styles.smallImage}
                                        source = {require('./accest/icons/p.png')}/>
                                        <Text style = {styles.greenText}>{item.profitText}</Text>
                                    </View>
                                ): (
                                    <View style ={styles.smallView} >
                                        <Image style = {styles.smallImage}
                                        source = {require('./accest/icons/n.png')}/>
                                        <Text style = {styles.redText}>{item.profitText}</Text>
                                    </View>
                                )}
                                
                                <Text style = {styles.finalText}> {item.lastText}</Text>
                            </View>
                            
                            {item.img2B ?(
                                <View>
                                       
                                   {item.selected ?(
                                    <View style ={{
                                        width:50, 
                                        height:50 ,
                                        borderRadius : 50 , 
                                        justifyContent :'center'  ,
                                        alignItems : 'center', 
                                        // borderWidt : 15,
                                        // borderColor : '#ffffff',
                                        backgroundColor : item.view2Color , 
                                        shadowOffset:{  width: 0,  height: 15,  },
                                        shadowColor: '#9e9e9e',
                                        shadowOpacity: 0.2,}
                                    }>
                                    <View style ={styles.shadowStyle}>
                                            <Image style ={styles.imageWithShadow}
                                            source = {item.img2}/>
                                        </View>
                                    </View>
                                   ) :(
                                    <View style ={{width:50, height:50  ,borderRadius : 50 , justifyContent :'center'  , alignItems : 'center', backgroundColor : item.view2Color}}>
                                        <Image style ={styles.finalImage}
                                        source = {item.img2}/>
                                         </View>
                                   )
                                   }
                                </View>
                            ): (
                                <View></View>
                            )
                            }
                            
                        </View> 
                   </View>
                )}
                />

            </View>
        )
    }
}
const styles = StyleSheet. create({
    containerOrigin :{
        flex : 1, 
        marginStart : 50, 
        marginEnd : 50 ,
        // justifyContent : 'space-between'
        
    },
    stickyStyle:{
        width : 365, 
        height :200 , 
        borderRadius : 20,
        //  justifyContent : 'center' ,
        backgroundColor :'white' , 
        marginTop : 50,
        
     },
     rowOne:{
         flexDirection :'row' , 
         justifyContent : 'space-between' , 
         marginTop : 20 ,
         marginStart : 20,
         marginEnd : 20, 
         alignItems :'center'
        },
    textTwo :{
        fontSize : 32,
        fontWeight : '900' ,
    },
    textOne : {
        fontSize : 17,
        fontWeight : '500' ,
        color : '#000000',
        opacity : 0.65
    },
    imageWithShadow :{ 
        width:45, 
        height:45,
       
    },
    redText :{
        color :'red' , 
        fontSize : 18 , 
        fontWeight : '500'
    },
    greenText :{
        color :'green' , 
        fontSize : 18 , 
        fontWeight : '500'
    },
    smallImage :{
        width : 20 , 
        height : 20 
    },
    finalText :{ 
        fontSize : 15 , 
        fontWeight : '400' , 
        opacity : .85
    },
    finalImage:{
        width:45, 
        height:45
    },
    shadowStyle:{
        width:50, 
        height:50 ,
        justifyContent :'center'  , alignItems : 'center',
        borderRadius : 50 ,
       shadowOffset:{  width: 0,  height: 5},
       shadowColor: '#ffffff'
    },
    smallView :{
        flexDirection :'row' , 
        alignItems : 'center',
        justifyContent : 'center'
    },
})