// import * as Application from 'expo-application';
import 'react-native-gesture-handler';
// import * as GoogleSignIn from 'expo-google-sign-in';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native"
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; 
import MainStackNavigator from './routes/MainStackNavigator';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  // console.log(application.application.id)
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <MainStackNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}

// export default class App extends React.Component {
//   state = { user: null };

//   componentDidMount() {
//     this.initAsync();
//   }

//   initAsync = async () => {
//     // try {
//       await GoogleSignIn.initAsync({
//       // You may ommit the clientId when the firebase `googleServicesFile` is configured
//       clientId: '243193092616-rgkb789bbidcbkdiku6pj5updmnd1n4e.apps.googleusercontent.com',
//     });
//   // } catch ({ message }) {
//   //   alert('GoogleSignIn.initAsync(): ' + message);
//   // }
//     this._syncUserWithStateAsync();
//   };

//   _syncUserWithStateAsync = async () => {
//     const user = await GoogleSignIn.signInSilentlyAsync();
//     this.setState({ user });
//   };

//   signOutAsync = async () => {
//     await GoogleSignIn.signOutAsync();
//     this.setState({ user: null });
//   };

//   signInAsync = async () => {
//     try {
//       await GoogleSignIn.askForPlayServicesAsync();
//       const { type, user } = await GoogleSignIn.signInAsync();
//       if (type === 'success') {
//         this._syncUserWithStateAsync();
//       }
//     } catch ({ message }) {
//       alert('login: Error:' + message);
//     }
//   };

//   onPress = () => {
//     if (this.state.user) {
//       this.signOutAsync();
//     } else {
//       this.signInAsync();
//     }
//   };

//   render() {
//     return <Text onPress={this.onPress}>Toggle Auth</Text>;
//   }
// }

          