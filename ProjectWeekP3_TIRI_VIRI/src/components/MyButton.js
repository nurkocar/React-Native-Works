import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';


import { introPage } from '../pages/styles';

const MyButton = (props) => {
    return (
        <View style = {introPage.container}>
            <TouchableOpacity
                style={introPage.buttonContainer}
                onPress={props.onSelect}
            >
                <Text style={introPage.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export { MyButton };