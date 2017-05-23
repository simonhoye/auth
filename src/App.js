import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBnXhdLTFOcupmnNtjVUMkK-ZHouR3L0hs',
            authDomain: 'auth-4de88.firebaseapp.com',
            databaseURL: 'https://auth-4de88.firebaseio.com',
            projectId: 'auth-4de88',
            storageBucket: 'auth-4de88.appspot.com',
            messagingSenderId: '324942830611'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{ height: 42, marginTop: 10 }}>
                        <Button 
                            onPress={() => firebase.auth().signOut()}
                        >
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View 
                        style={{ flex: 1 }}
                    >
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
