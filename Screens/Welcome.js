import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Welcome extends Component {
   render() {
      return (
         <View style={{ flex: 1 }}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
            <Text style={{ fontWeight: "bold", padding: 10 }}>
               Obsessive–compulsive disorder (OCD)
       </Text>
            <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>
               Obsessions
       </Text>
            <Text style={{ paddingLeft: 10,paddingBottom:10 }}>
               Someone with obsessive–compulsive disorder has thoughts called obsessions. A thought that is an obsession will happen many
               times and is a thought that the person does not want to have
       </Text>

            <Text style={{ fontWeight: "bold", paddingLeft: 10 }}>
               Compulsions
       </Text>

            <Text style={{ paddingLeft: 10 ,paddingBottom:10}}>
               To act in a certain way to stop the obsessive thought.
       </Text>
          
            <Text style={{fontWeight: "bold",paddingLeft: 10 }}>
            ERP, or Exposure and Response Prevention therapy,
            </Text>
            <Text style={{ paddingLeft: 10 , paddingBottom:10}}>
              is the gold-standard for OCD treatment. In ERP, you voluntarily expose yourself to the source of your fear over and over and over again, without acting out any compulsions to neutralize or stop the fear. By repeatedly facing
               something you’re afraid of, you force your brain to recognize how irrational it is.
       </Text>
         </View>
      )
   }
}