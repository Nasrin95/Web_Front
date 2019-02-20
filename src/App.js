import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Header from './Header'
import Main from './Main'
import { createStore , applyMiddleware  } from 'redux'
import {Provider}  from 'react-redux'
import reducer from './Service/reducer'
import thunk from "redux-thunk";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
class App extends Component {

  render() {

    return (
      <Provider style={styles.container} store={store}>
        <Header/>
        <Main/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
})

export default App;
