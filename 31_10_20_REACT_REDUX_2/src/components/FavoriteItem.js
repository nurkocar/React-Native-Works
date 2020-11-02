import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteItem = ({ item, onRemoveFavorite }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onRemoveFavorite}>
            <Icon name={"fire"} size={20} color={"red"} />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export { FavoriteItem }

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        marginLeft: 10,
        fontWeight: '200'
    }
})