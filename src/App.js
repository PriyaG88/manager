import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Reducer from './reducers/index';
import Router from './router';

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
    const store = createStore(Reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
