import 'react-native-gesture-handler';
import React, { useContext, useState } from 'react';
import { View, Text, Button, Picker, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { cardContext } from '../Context/cardContext';
import {
    MaterialIcons
} from '@expo/vector-icons';

const Cards = (props) => {

    const { state, dispatch } = useContext(cardContext);

    const [editIndex, setEditIndex] = useState(-1); // nothing to edit initially
    const [problem, setProblem] = useState('');
    const [category, setCategory] = useState('');
    const [count, setCount] = useState(0);

    const onDelete = (index) => {
        dispatch({ type: 'DELETE_CARD', index });
        
    }



    const addCounter = (currentCount) => {
       
        setCount(currentCount + 1)
    }

    const subCounter = (currentCount) => {
       
        setCount(currentCount - 1)
    }

    const onEdit = (index) => {
        setEditIndex(index); 



    }

    const cancelEdit = () => {
        setEditIndex(-1);
    }

    const onSaveEdit = () => {
       
        if (problem.length === 0 && editIndex !== -1) {
          
            setProblem(state[editIndex].problem)
        }
        if (count.length === 0 && editIndex !== -1) {
            setCount(state[editIndex].count)
        }
        dispatch({ type: 'EDIT_CARD', editIndex, problem, category, count });
        setEditIndex(-1);
    }
    return (


        <View style={styles.card_border}>

            {/* Edit  */}
            {editIndex === props.index && <View>
                <View style={styles.icon_wrapper}
                >
                    <Text style={styles.text}>
                        Edit Here
                    </Text>
                </View>

                <Text style={styles.text_subtitle} selectable>
                    {props.problem}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Problem Edit'
                    value={problem}
                    onChangeText={problem => setProblem(problem)}
                    required>
                </TextInput>
                <Text style={styles.text_subtitle}>
                    {props.category}
                </Text>
                <Picker
                    selectedValue={category}
                    style={{ height: 50, width: 250 }}
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
                <View style={styles.icon_wrapper}
                >
                    <Text style={styles.text_subtitle}>
                        Number of Times: {props.count}
                    </Text>

                    <Text style={styles.text_subtitle}>
                        Edit to: {count}
                    </Text>
                    <View style={{ flexDirection: 'column', paddingBottom:20 }}>
                    <MaterialIcons name="cancel" style={{paddingBottom:50}} size={38} color="black"
                            onPress={() => cancelEdit()} />
                        <MaterialIcons name="add-circle" size={38} color="green"
                            onPress={() => addCounter(count)} />
                             <MaterialIcons name="indeterminate-check-box" size={38} color="red"
                            onPress={() => subCounter(count)} />
                    </View>

                </View>



                <Button style={{ width: 100 }}
                    title="Save Edit"
                    onPress={() => onSaveEdit()}
                >
                </Button>
            </View>
            }
            {/* edit ends */}



            {/* Problem Statement  */}

            <View style={styles.icon_wrapper}
            >
                <Text style={styles.text}>
                    Problem Statement

            </Text>

                <MaterialIcons name="delete" size={32} color="red" onPress={() => onDelete(props.index)} />
            </View>

            <Text style={styles.text_subtitle}>
                {props.problem}
            </Text>


            {/* Category */}
            <View style={styles.icon_wrapper}
            >
                <Text style={styles.text}>
                    Category
        </Text>
                <MaterialIcons name="edit" size={32} color="green"
                    onPress={() => onEdit(props.index)} />

            </View>


            <Text style={styles.text_subtitle}>
                {props.category}
            </Text>


            {/* Number of Times  */}
            <View style={styles.icon_wrapper}
            >
                <Text style={styles.text}>
                    Number of Times: {props.count}
                </Text>

            </View>

            {/* index temp */}
            <View style={styles.icon_wrapper}
            >
                <Text style={styles.text}>
                    Index: {props.index}
                </Text>

            </View>


        </View>
    );
}

var styles = StyleSheet.create({
    card_border: {
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10
    },
    icon_wrapper: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 20,
        padding: 10,
        backgroundColor: '#d9d9d9',
        justifyContent: 'space-between'
    },
    text_subtitle: {
        fontSize: 15,
        padding: 20
    },
})

export default Cards;