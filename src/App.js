import React, { Component } from 'react';
import {View , Text , StyleSheet , FlatList ,Image , TouchableHighlight , Animated} from 'react-native';
import {data} from './DataComponet';
import BioComponent from './BioComponent'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
import {users} from './usersComponet'
class App extends Component {
  constructor (props){
    super(props);
    this.animatedValue = new Animated.Value(0)
    this.state = {
      users : users ,
      selectedID :2,
      selectedImage : 0,
      pressed : false,
    }
}
  onPressImage = () =>{}

  render() {
   
    return (
      <View style = {styles.container}>
        <Animated.View style = {!this.state.pressed ? styles.asideStyle : styles.asideTwoStyle}>
        {/* <Animated.View style = {{ width : width , alignItems : 'flex-start',borderTopLeftRadius : 20}}> */}
            {!this.state.pressed ? (
              <View style={{ alignItems : 'center'}}>
              <TouchableHighlight 
              underlayColor = 'white'
              onPress ={() => {this.setState({pressed : true})}}>
                  <Image
                    style ={styles.notPressedImage}
                    source ={require('./accest/Align-Right-128.png')}
                  />
              </TouchableHighlight>
            
            </View>
            ) : (
              <TouchableHighlight 
              underlayColor = 'white'
              onPress ={() => {this.setState({pressed : false})}}>
                <Text style = {styles.firstTextPressed}>someanalytics</Text> 
               </TouchableHighlight>
             )}
            
            <View style={{ alignItems : 'center', flex : 1}}>
                <FlatList
                data = {data}
                style={{ flex : 1}}
                keyExtractor={item => item}
                renderItem={({item}) =>( 
                
                  <TouchableHighlight onPress = {() => this.setState({selectedImage: item.id})}
                  underlayColor ='white'>
                   
                        {this.state.pressed  ? (
                          <View>
                            {item.second ?(
                              <View style = {(styles.pressedStyle) }>
                              <Image source = {this.state.selectedImage === item.id ? item.images : item.image } 
                              style ={{width : 20 , height : 20  }}
                              />
                              <Text style ={this.state.selectedImage !== item.id ? styles.pressedText : styles.pressedTextBlue }>{item.name}</Text>
                        </View>
                            ) : (
                              <View></View> 
                            )}
                          </View> 
                        ) :
                        (
                          <View style = {this.state.selectedImage === item.id ? (styles.borderStyle) : (styles.borderNotStyle)}>
                            <Image source = {this.state.selectedImage === item.id ? item.images : item.image } 
                            style ={{width : 20 , height : 20  }}
                            />
                         </View>
                   )}
                  
                  </TouchableHighlight>
                  
                )}

                />
            </View>

        </Animated.View>
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
                      
{/* 
                      <View style = {styles.nikeStyle}>
                          <Image 
                        style = {styles.nikeImageStyle}
                        source = {require('./accest/icons/nike.png')} />
                        <View style = {styles.smallHolder} >
                          <View style = {styles.smallImage} >
                            <Image 
                            source = {require('./accest/icons/instagram (1).png')}
                            style = {{width :20 , height : 20}} />
                          </View>
                        </View>
                      </View>
                      <View style = {styles.imageViewStyle}>
                          <Image 
                        style = {styles.imageStyle}
                        source = {require('./accest/images.jpg')} />
                        <View style = {styles.smallHolder} >
                          <View style = {styles.smallImage2} >
                            <Image 
                            source = {require('./accest/icons/instagram (1).png')}
                            style = {{width :20 , height : 20}} />
                          </View>
                        </View>
                      </View>
                      <View style = {styles.addStyle}>
                          <Image 
                        style = {{width : 20 , height : 20}}
                        source = {require('./accest/icons/add.png')} />
                      </View> */}
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
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container :{
    flex : 1,
    flexDirection : "row",
    // alignItems : 'center',
    // justifyContent : "center" ,
    // backgroundColor :'red',
    },
    notPressedImage : {
      width : 35 , 
      height : 35 , 
      marginBottom : 30 , 
      marginTop : 10 , 
      marginStart : 15
    },
    firstTextPressed : {
      fontSize : 16,
      marginTop : 30,
      marginBottom : 40,
      marginStart : 5,
      fontWeight : '650'
    },
    borderStyle :{ 
      flexDirection :'row',
      marginBottom : 20,
      width : 65 , 
      height : 40 , 
      justifyContent : 'center',
      alignItems : 'center',
      borderStartColor : 'blue' , 
      borderStartWidth : 2,
    },
    borderNotStyle :{
      flexDirection :'row',
      marginBottom : 20,
      width : 65, 
      height : 40 , 
      justifyContent : 'center',
      alignItems : 'center',
      borderStartColor : 'white',
    },
    pressedStyle :{ 
      marginStart : 5,
      flexDirection :'row',
      marginBottom : 10,
      width : 165 , 
      height : 40 , 
      // justifyContent : 'space-between',
      alignItems : 'flex-start',
      // borderStartColor : 'blue' , 
      // borderStartWidth : 2,
    },
  
    pressedText : {
      marginStart : 10,
      fontSize : 15,
      fontWeight : '500',
      opacity : .6
    },
    pressedTextBlue : {
      color :'blue',
      marginStart : 10,
      fontSize : 15,
      fontWeight : '500',
      opacity : .6
    },
    text11 : {
      fontSize : 15 , 
      fontWeight : '600' , 
      marginStart : 15 ,
      opacity:.4
    },
    instagramImageStyle :{
      width : 30 , 
      height : 30 ,
      marginStart : 20 ,
       opacity:.2
      },
    addStyle :{
      backgroundColor : "#00FF60" ,
      opacity:.4 , 
      alignItems : 'center',
      justifyContent : 'center' ,
      borderRadius : 50, 
      marginStart : 15 , 
      width : 40 , 
      height :40 
  },
  profileStyle : {
    width : 150,
    height : 150,
    borderRadius : 100
  },
  nikeImageStyle :{
    width : 40 , 
    height :40 , 
    // opacity:.6,
    borderRadius : 50 ,
  },
  smallHolder :{
    backgroundColor : 'white' , 
    position : 'absolute' , 
    marginStart : 20 , 
    borderRadius : 50
  },
  smallImage : {
    width : 20 , 
    height :20 , 
    // opacity : .6,
    borderRadius : 50,
  },
  smallImage2 : {
    width : 20 , 
    height :20 , 
    marginBottom : 12 ,
    borderRadius : 50,
  },
  imageStyle : {
    width : 45 , 
    height : 45 ,  
    borderRadius : 50 ,
     marginBottom : 10
    },
    imageViewStyle :{ 
      flexDirection : "row",
      alignItems : 'center',
      justifyContent : 'center' ,
      // borderBottomColor : 'blue' ,
       marginStart : 15 ,
        // borderBottomWidth : 2
      },
  nikeStyle2 : {
    
    borderBottomColor : 'blue',
    borderBottomWidth : 2,
    flexDirection : "row",
    alignItems : 'center',
    justifyContent : 'center' ,
    // marginStart : 20,
      // backgroundColor : "red" ,
      // opacity:.4 ,
      
       width : 40 ,
        height :80
    },
    nikeStyle1 : {
      
      opacity : .3,
      flexDirection : "row",
      alignItems : 'center',
      justifyContent : 'center' ,
      // marginStart : 20,
        // backgroundColor : "red" ,
        // opacity:.4 ,
        
         width : 40 ,
          height :80
      },

      nikeStyle : {
        flexDirection : "row",
        alignItems : 'center',
        justifyContent : 'center' ,
        // marginStart : 20,
          // backgroundColor : "red" ,
          // opacity:.4 ,
          borderRadius : 50 ,
           width : 40 ,
            height :40
        },
  asideStyle : {
      width : 70,
      alignItems : 'flex-start',
      borderTopLeftRadius : 20
      
    },
    asideTwoStyle :{
      width : 210,
     
      // backgroundColor : "blue",
      marginStart : 20,
      alignItems : 'flex-start'
      // borderTopLeftRadius : 20
    },

    mainStyle : {
      flex : 15,
      // backgroundColor : "yellow"
    },
    touchStyle :{
      width : 40 , 
      height : 80, 
      marginStart : 25
    },

    section1 :{
      flex :2,
      flexDirection : "row",
      // backgroundColor : "yellow",
      alignItems : 'center',
      justifyContent : 'space-between' ,
      marginTop : 10
    },
    section11 :{
      width : 250,
      marginStart : '15' ,
      // flex : 1,
      flexDirection : "row",
      // backgroundColor : "yellow",
      alignItems : 'flex-start',
      
    },
    section12 :{
      width : 200,
      // marginStart :750,
      // flex : 1,
      flexDirection : "row",
      // backgroundColor : "green",
      alignItems : 'flex-start',
    },

    section2 :{
      flex : 8,
      marginStart : 20 ,
      marginEnd : 20,
      flexDirection : "row",
      // backgroundColor : "red"
    },
    section21 : {
        flex : 1,
        marginBottom : 15,
        alignItems : 'center',
      justifyContent : 'center' ,
        // backgroundColor :'red'
    },
    section22 : {
      flex : 6,
      marginBottom : 15,
      // backgroundColor :'green'
  },
  section23 : {
    flex : 1,
    justifyContent : 'flex-end',
    marginBottom : 15,
    flexDirection : 'row',
    // backgroundColor :'yellow'
},
section231Temp :{
  width : 40,
  height : 40 ,
  justifyContent: 'center',
  alignItems :'center',
  borderRadius : 50,
  backgroundColor : 'rgb(240 , 240, 240)',
  marginEnd : 25,
  marginTop : 25 ,
},
section231 :{
  width : 40,
  height : 40 ,
  justifyContent: 'center',
  alignItems :'center',
  borderRadius : 50,
  backgroundColor : 'rgb(240 , 240, 240)',
},
toolImage :{
  width : 20,
  height : 20,
},

    section3 :{
      flex : 1.5,
      flexDirection : "row",
      // backgroundColor : "blue"
    },
    section4 :{
      backgroundColor  :'rgb(240,240,240)',
      flex : 2,
      flexDirection : "row",
      // backgroundColor : "pink"
    },
    section5 :{
      flex : 8,
      flexDirection : "row",
      backgroundColor  :'rgb(240,240,240)',
    },

})

export default App;
