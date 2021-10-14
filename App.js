import React from 'react'; 
import AppNavigator from './routes/AppNavigator';
import ThemeContextProvider from './Context/ThemeContext';
import { CardContextProvider } from './Context/cardContext';
import 'react-native-gesture-handler'; 
export default class App extends React.Component {

  render() {
    return (
      <ThemeContextProvider>
        <CardContextProvider>
          <AppNavigator />
        </CardContextProvider>
      </ThemeContextProvider>
    );
  }
}