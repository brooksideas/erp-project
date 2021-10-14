import 'react-native-gesture-handler';
import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Picker, Button, AsyncStorage, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { cardContext } from '../Context/cardContext';
const New = () => {

    const globalState = useContext(cardContext);
    const { dispatch } = globalState;

    const [problem, setProblem] = useState('');
    const [category, setCategory] = useState('');
    const [count, setCount] = useState('');
    const [index, setIndex] = useState(Math.random());
   
    const onSaveHandle = () => {
       
        dispatch({
            type: 'ADD_CARD', cards: {
                problem, category, count, index
            }
        })
       
        setProblem('');
        setCategory('');
        setCount('');
        setIndex(Math.random());
        alert('Successfully Registered!');
    }




    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                >
                    <Text style={styles.text}>
                        Add New OCD
            </Text>

                    <Text style={styles.text_subtitle}>
                        Write the OCD Problem Statement
            </Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Problem'
                        value={problem}
                        onChangeText={problem => setProblem(problem)}
                        required>

                    </TextInput>

                    <Text style={styles.text_subtitle}>
                        Pick OCD Category
            </Text>

                    {/* 2 way bind the Item selected */}
                    <Picker
                        selectedValue={category}
                        style={{ height: 50, width: 150 }}
                        onValueChange={itemValue =>
                            setCategory(itemValue)
                        }
                    >
                        <Picker.Item label="Checkers" value="Checkers" />
                        <Picker.Item label="Religion/Intrusive" value="Religion/Intrusive" />
                        <Picker.Item label="Counting" value="Counting" />
                        <Picker.Item label="Cleaning" value="Cleaning" />
                        <Picker.Item label="Out-of-Blue" value="Out-of-Blue" />
                    </Picker>


                    <Text style={styles.text_subtitle}>
                        OCD Count Number:
            </Text>

                    <Text style={styles.number}>

                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder='Count'
                        value={count}
                        onChangeText={count => setCount(count)}
                        required>

                    </TextInput>


                    <Button style={{ width: 100 }}
                        title="Save"
                        onPress={() => onSaveHandle()}
                    >
                    </Button>
                </ScrollView>

            </SafeAreaView>

        </View>

    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 15
    },
    text: {
        fontSize: 20,
        padding: 10,
        backgroundColor: '#d9d9d9'
    },
    text_subtitle: {
        fontSize: 15,
        padding: 20
    },
    input: {
        padding: 15,
        height: 50,
        height: 70,
        width: 180,
        margin: 20,
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    },
    number: {
        fontSize: 20,
        padding: 10,
        backgroundColor: 'white'
    },
    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#FF851B'
    },
    buttonText: {
        fontSize: 14,
        color: '#fff'
    }
});


export default New;