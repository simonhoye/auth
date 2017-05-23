import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBnXhdLTFOcupmnNtjVUMkK-ZHouR3L0hs',
            authDomain: 'auth-4de88.firebaseapp.com',
            databaseURL: 'https://auth-4de88.firebaseio.com',
            projectId: 'auth-4de88',
            storageBucket: 'auth-4de88.appspot.com',
            messagingSenderId: '324942830611'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
