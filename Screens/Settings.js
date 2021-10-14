import React, { Component } from 'react';
import { Text, View, Switch} from 'react-native'; 
import {ThemeContext} from '../Context/ThemeContext';
export default class DashBoard extends Component{
   
    static contextType = ThemeContext; 
    render(){
        const {toggleTheme,isLightTheme} = this.context;
        return(
          <View style={{flex:1}}>
                   <Text style={{flex:1}}> Settings </Text>   
                   <Text> Change the Theme </Text>
                   <Switch style={{flex:1}} 
                   onValueChange={toggleTheme}
                   value={isLightTheme}
                     ></Switch>
                     <Text style={{flex:1}}>
                       Theme value :
                        {isLightTheme?'light Mode':'dark Mode'}
                         </Text>

                </View> 
        );
    }
}