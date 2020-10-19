import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { todo_input } from '../styles';

const ToDoInput = (props) => {

    const [text, setText] = useState('');

    return (
        <View style={todo_input.container}>
            <View style={todo_input.inputContainer}>
                <TextInput
                    value = {text}
                    placeholder = 'Type something to do..'
                    onChangeText = {(value) => setText(value)}
                />
            </View>

            <TouchableOpacity 
                style = {todo_input.buttonContainer}
                onPress = {
                    () => {
                        props.onToDoEnter(text);
                        setText('');
                        
                    }
                }
            >
                <Text style = {todo_input.buttonText}>To Do Input</Text>
            </TouchableOpacity>
        </View>
    )
}

export {ToDoInput};