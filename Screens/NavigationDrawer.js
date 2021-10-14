import 'react-native-gesture-handler';
import React, { Component } from 'react'; 
import {
    createAppContainer
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import New from './New';
import Settings from './Settings';
import Summary from './Summary';


const DrawerNavigator = createDrawerNavigator({
    Welcome: Welcome,
    Dashboard: Dashboard,
    New: New,
    Settings:Settings,
    Summary:Summary
}, {
    initialRouteName: 'Welcome'
});
const AppContainer = createAppContainer(DrawerNavigator); 

export default class App extends Component {
    render() {
        return (<AppContainer/>);
    }
}