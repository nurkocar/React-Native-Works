import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const RestaurantPage = ({route}) => {

    const {name, image} = route.params;

    return (
        <View>
            <Image
                style = {styles.img}
                source = {{uri:image}}
            />
            <Text>{name}</Text>
        </View>
    )
}

export default RestaurantPage;

const styles = StyleSheet.create({
    img:{
        width:300,
        height:300
    }
})