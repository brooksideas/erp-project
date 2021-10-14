import React, { createContext , Component} from 'react'; 

export const ThemeContext = createContext(); //to be consumed

class ThemeContextProvider extends Component {

    state = {
        isLightTheme: true,
        light: {
            primary: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            primary: '#ddd',
            ui: '#333',
            bg: '#555'
        }
    };

    toggleTheme = () =>{ 
        this.setState({isLightTheme:!this.state.isLightTheme} ); //toggle 
    }
    render() {
        return (
            <ThemeContext.Provider value={
                {...this.state,
                 toggleTheme: this.toggleTheme
                }
            }>
              {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;