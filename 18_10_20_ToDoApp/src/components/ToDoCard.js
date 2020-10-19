import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {todoCard} from '../styles'

const TodoCard = (props) => {
    return (

        <TouchableOpacity 
            style = {todoCard.container}
            onPress = {() => props.onDone()}
            onLongPress = {() => props.onRemove() }
        >
            <Text style = {[
                todoCard.text,
                {textDecorationLine: props.data.isDone ? 'line-through' : null}
            ]}>{props.data.todo}</Text>
        </TouchableOpacity>
    )
}

export { TodoCard } 