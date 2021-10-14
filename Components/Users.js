import React from 'react';
import { Text,View} from 'react-native';

const user = (props) => (

    <View style={{flex:1,flexDirection:"column"}}>
       

        <Text  style={{flex:1, padding:10}} >
           Name = {props.name}
        
        </Text>

        <Text style={{flex:1, backgroundColor:'gray', padding:10}}>
        Email = {props.email}
        </Text>
           
        
    </View>
);

export default user;