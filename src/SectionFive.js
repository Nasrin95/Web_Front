import React, { Component } from 'react';
import {View , Text , StyleSheet , FlatList ,Image , TouchableOpacity , Animated } from 'react-native';
import{connect} from 'react-redux'
import {data}  from './Sticky'
import {setRemoveItem} from './Service/action'
 
const arr = []
for (var i=0 ; i<500 ; i++){
    arr.push(i)
}
class SectionFive extends Component{

    constructor() {
        super();
        this.animatedValue = []
        arr.forEach((value) => {
        this.animatedValue[value] = new Animated.Value(0)
        })
        this.state = {
           
            scaleValue: new Animated.Value(0)
        }
    }
    
    componentDidMount() {
        this.animate()
    }
  
    animate () {
      const animations = arr.map((item ) => {
        return Animated.timing(
          this.animatedValue[item],
          {
            toValue: 1,
            duration: 1000,
           
          }
        )
      })
      Animated.sequence(animations).start()
    }

    render (){
        return (
            <View style = {styles .containerOrigin}>
            
                <FlatList
                    data = {this.props.result}
                    style={{ flex : 1 ,  }}
                    keyExtractor={item => item.login}
                    horizontal={false}
                    numColumns = {3}
                    columnWrapperStyle={{justifyContent : 'space-between'}}
                    renderItem={({item , index}) =>( 
                        <TouchableOpacity onPress = {() => (this.props.setRemoveItem(index))} >
                            
                        
                                
                            <Animated.View style = {[styles.stickyStyle , { opacity: this.animatedValue[index] }]}>
                                <Text style = {{fontSize : 40}} >{item.login}</Text>
                                {/* <View style = {styles.rowOne} >
                                    <Text style = {styles.textOne} >{item.date}</Text>
                                    <View style ={{width:50, height:50 ,borderRadius : 50 , justifyContent :'center'  , alignItems : 'center', backgroundColor : item.viewColor}}>
                                        <Image style ={{width:45, height:45}}
                                        source = {item.img1}/>
                                    </View>

                                </View > 
                                
                                <View style = {{marginStart : 20}}>
                                <Text style = {styles.textTwo} >{item.mainText}</Text>
                                </View> 

                                <View style = {[styles.rowOne , {  justifyContent :'flex-start' ,}]}>
                                <View style = {{flexDirection :'row' , flex :4   }}>
                                        {item.profit &&
                                            <View style ={styles.smallView} >
                                                <Image style = {styles.smallImage}
                                                source = {require('./accest/icons/p.png')}/>
                                                <Text style = {styles.greenText}>{item.profitText}</Text>
                                                <Text style = {styles.finalText}> {item.lastText}</Text> 
                                            </View>
                                        }
                                        {!item.profit &&
                                            <View style ={styles.smallView} >
                                                <Image style = {styles.smallImage}
                                                source = {require('./accest/icons/n.png')}/>
                                                <Text style = {styles.redText}>{item.profitText}</Text>
                                                <Text style = {styles.finalText}> {item.lastText}</Text> 
                                            </View>
                                        }
                                        
                                        {/* <View style = {{flex : 2,}} >
                                            <Text style = {styles.finalText}> {item.lastText}</Text> 
                                        </View> */}
                                    {/* </View>
                                    
                                    {item.img2B &&
                                        <View style = {{flex : 1}}>
                                        {item.selected &&
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
                                        }
                                            {!item.selected &&
                                            <View style ={{width:50, height:50  ,borderRadius : 50 , justifyContent :'center'  , alignItems : 'center', backgroundColor : item.view2Color}}>
                                                <Image style ={styles.finalImage}
                                                source = {item.img2}/>
                                            </View>
                                        }
                                        </View>
                                    }
                                    
                                </View>  */} 
                            </Animated.View>
                       </TouchableOpacity>
                   

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
        
    },
    stickyStyle:{

        flex : 1,
        borderRadius : 20,
        backgroundColor :'pink' , 
        margin : 30,
        paddingVertical : 30,
        
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
        opacity : 0.55
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
        opacity : .85,
        
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
        flex : 1,
        flexDirection :'row' , 
        alignItems : 'flex-start',
    },
})

const mapStateToProps=(state)=>{
    return{
        data : state.item,
        result: state.result,
        loading : state.loading
    }

}

export default connect(mapStateToProps,{setRemoveItem})(SectionFive)