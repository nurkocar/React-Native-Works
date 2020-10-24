import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { useNavigation } from '@react-navigation/native';

const CityCard = ({city, onClicked}) => {

    return (
    
            <TouchableOpacity
                onPress = {() => onClicked() }
            >
                <Text>{city.name}</Text>
            </TouchableOpacity>
    )
}

export default CityCard;