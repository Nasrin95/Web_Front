import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableHighlight, Animated } from 'react-native';
import { data } from './DataComponet';
import{ fetchProducts} from './Service/action'
import{connect} from 'react-redux'
class Header extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
        width: new Animated.Value(50),
        
        selectedImage: 0,
        isFullWidth: false
        }
    }
    componentDidMount (){
      this.props.fetchProducts()
    }
    toggleWidth() {
        const endWidth = this.state.isFullWidth ? 50 : 165;
    
        this.setState({
        isFullWidth: !this.state.isFullWidth
        })
    
        Animated.spring(this.state.width, {
        toValue: endWidth,
        duration: 500,
        }).start();
    }
    render(){
        return(
            <Animated.View style={[{ width: this.state.width ,
                backgroundColor : this.state.width.interpolate({
                inputRange : [50 ,75, 105 , 130 ,165],
                outputRange : ['#ffffff' , '#eeeeee' ,'#dddddd' , '#eeeeee' , '#ffffff'],
              }) 
            }, styles.container]}>
            {!this.state.isFullWidth &&
            <TouchableHighlight
              underlayColor='white'
              onPress={() => { this.toggleWidth() }}>
              <Image
                style={styles.notPressedImage}
                source={require('./accest/Align-Right-128.png')}
              />
            </TouchableHighlight>
            }
           {this.state.isFullWidth &&
              <TouchableHighlight 
              underlayColor = 'white'
              onPress ={() => {this.toggleWidth()}}>
                <Text style = {styles.firstTextPressed}>someanalytics</Text> 
              </TouchableHighlight>
           }
          <View style={{ alignItems: 'center', flex: 1 }}>
            <FlatList
              data={data}
              style={{ flex: 1 }}
              keyExtractor={item => item}
              renderItem={({ item }) => (

                <TouchableHighlight onPress={() => this.setState({ selectedImage: item.id })}
                  underlayColor='white'>
                  <View style={(styles.pressedStyle)}>
                    <Image source={this.state.selectedImage === item.id ? item.images : item.image}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text style={this.state.selectedImage !== item.id ? styles.pressedText : styles.pressedTextBlue}>{item.name}</Text>
                  </View>

                </TouchableHighlight>

              )}

            />
          </View>

        </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container : { 
        alignItems: 'flex-start', 
        overflow: 'hidden', 
        // borderTopLeftRadius: 20 
    },
 
    notPressedImage: {
        width: 35,
        height: 35,
        marginBottom: 35,
        marginTop: 30,
        marginStart: 15
    },
    firstTextPressed: {
        fontSize: 16,
        marginTop: 30,
        marginBottom: 50,
        marginStart: 20,
        fontWeight: '650'
    },
    borderStyle: {
        flexDirection: 'row',
        marginBottom: 10,
        width: 65,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderStartColor: 'blue',
        borderStartWidth: 2,
    },
    borderNotStyle: {
        flexDirection: 'row',
        marginBottom: 10,
        width: 65,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderStartColor: 'white',
    },
    pressedStyle: {
        marginStart:20,
        flexDirection: 'row',
        marginBottom: 10,
        width: 165,
        height: 40,
        // justifyContent : 'space-between',
        alignItems: 'flex-start',
        // borderStartColor : 'blue' , 
        // borderStartWidth : 2,
    },

    pressedText: {
        marginStart: 10,
        fontSize: 15,
        fontWeight: '500',
        opacity: .6
    },
    pressedTextBlue: {
        color: 'blue',
        marginStart: 10,
        fontSize: 15,
        fontWeight: '500',
        opacity: .6
    },
}
)

export default  connect (null ,{ fetchProducts})(Header);