import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import Reducer from './reducers/index';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: "AIzaSyCsjkGQUeOelzZhZHpCR6EZiptW-_cwv04",
    authDomain: "manager-44d5f.firebaseapp.com",
    databaseURL: "https://manager-44d5f.firebaseio.com",
    projectId: "manager-44d5f",
    storageBucket: "manager-44d5f.appspot.com",
    messagingSenderId: "672240092700"
  };
  firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Provider store={createStore(Reducer)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
