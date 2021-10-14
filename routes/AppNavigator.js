import 'react-native-gesture-handler';
import { 
     createAppContainer
   } from 'react-navigation';
   import { createStackNavigator } from 'react-navigation-stack';
   import React, { Component } from 'react';
   import Login from '../Screens/Login'; 
   import Home from '../Screens/Home';

   const SwitchNavigator = createStackNavigator({
     Login: { screen: Login },
     Home : { screen: Home}
   }, 
     {
       initialRouteName: 'Login'
     }
   );
   
   const AppContainer = createAppContainer(SwitchNavigator);
   
   export default class App extends Component {
     render() {
       return (<AppContainer />);
     }
   }