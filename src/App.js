import React, { Component } from 'react';
import {View , Text , StyleSheet , FlatList ,Image , TouchableHighlight} from 'react-native';
import {data} from './DataComponet';
import BioComponent from './BioComponent'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'
class App extends Component {

  onPressImage = () =>{}
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.asideStyle}>
            <View style={{ alignItems : 'center'}}>
              
              <Image
                style ={{width : 35 , height : 35 , marginBottom : 30 , marginTop : 10}}
                source ={require('./accest/Align-Right-128.png')}
              />
            
            </View>
            <View style={{ alignItems : 'center', flex : 1}}>
                <FlatList
                data = {data}
                style={{ flex : 1}}
                keyExtractor={item => item}
                
                renderItem={({item}) =>( 
                  <View>
                    <TouchableHighlight onPress = {this.onPressImage}>
                      <Image source = {item.images} 
                        style ={{width : 35 , height : 35 , marginBottom : 20}}
                        />
                    </TouchableHighlight>
                   </View>
                )}

                />
            </View>

        </View>
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
                      </View>
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
                      <View style = {styles.section231} >
                        <Image 
                         style = {styles.toolImage} 
                         source = {require('./accest/icons/message-closed-envelope.png')} />
                      </View>
                      <View style = {[styles.section231 , {marginEnd : 40 }] } >
                        <Image 
                         style = {styles.toolImage} 
                         source = {require('./accest/icons/more.png')} />
                      </View>
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
    opacity:.6
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
    opacity : .6,
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
      borderBottomColor : 'blue' ,
       marginStart : 15 ,
        borderBottomWidth : 2
      },
  nikeStyle : {
    flexDirection : "row",
    alignItems : 'center',
    justifyContent : 'center' ,
      backgroundColor : "red" ,
      opacity:.4 ,
      borderRadius : 50 ,
       width : 40 ,
        height :40
    },
  asideStyle : {
      flex : 0.7, 
      // backgroundColor : "blue",
      borderTopLeftRadius : 20
      
    },
    mainStyle : {
      flex : 15,
      // backgroundColor : "yellow"
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
section231 :{
  width : 40,
  height : 40 ,
  justifyContent: 'center',
  alignItems :'center',
  borderRadius : 50,
  backgroundColor : 'rgb(240 , 240, 240)',
  marginEnd : 25,
  marginTop : 25 ,
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
