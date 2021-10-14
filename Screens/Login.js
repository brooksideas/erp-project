import React, { Component } from 'react';
import { Text, View, TextInput, Keyboard, Button } from 'react-native';
import {ThemeContext} from '../Context/ThemeContext';
// class Greet extends Component {

//    //state object
//    state = {
//         isShowingText: true 

//  };    
//     render(){
//         return{

//         }
//     }
// }
 
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: '',
            typedPass: '',
            keyText: ''
        }
    }
    componentDidMount() {
        this.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(
                () => {
                    return {
                        keyText: 'Keyboard Showing'
                    }
                }
            )
        })
    }

    static contextType = ThemeContext;

    render() {
     // gets the Theme 

        const {isLightTheme,light,dark} =  this.context; //Destructuring into separate consts
        const theme = isLightTheme?light:dark;

        return (
            <View style={{ flex: 1, flexDirection: "column", alignItems: 'flex-start' }}>
                <View style={{ flexDirection: "row" , backgroundColor:theme.primary}} >
                    {/* <Text> {this.state.keyText}</Text> */}
                    <Text style={{ alignSelf: "center", backgroundColor:theme.bg }} > Email: </Text>
                    <TextInput style={{
                        height: 40,
                        width: 180,
                        margin: 20,
                        borderColor: 'black',
                        borderWidth: 1
                    }}
                        keyboardType='email-address'
                        placeholder='Enter Email'
                        onChangeText={
                            (text) => {
                                this.setState(
                                    (prev) => {
                                        return {
                                            typedText: text
                                        };
                                    }
                                )
                            }
                        }
                    />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ alignSelf: "center",  backgroundColor:theme.primary }}> Password: </Text>
                    <TextInput style={{
                        height: 40,
                        width: 180,
                        margin: 20,
                        borderColor: 'black',
                        borderWidth: 1
                    }}
                        keyboardType='default'
                        placeholder='Enter Password'
                        secureTextEntry={true}
                        onSubmitEditing={Keyboard.dismiss}
                        onChangeText={
                            (pass) => {
                                this.setState({typedPass:pass})
                            }
                        }
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ alignSelf: "center" }}> description: </Text>
                    <TextInput style={{
                        height: 100,
                        width: 180,
                        margin: 20,
                        borderColor: 'black',
                        borderWidth: 1
                    }}
                        keyboardType='default'
                        placeholder='Your description'
                        placeholderTextColor='green'
                        multiline={true}
                        editable={false}
                        value={this.state.typedPass}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                
                    <Button style={{height:5, alignItems:'center'}}
                        title="Login"
                        onPress={() =>
                            this.props.navigation.navigate('Home')
                        }
                    />
                </View>


            </View>
        )
    }
}