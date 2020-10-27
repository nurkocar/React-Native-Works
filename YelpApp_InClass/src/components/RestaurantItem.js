import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

// {
//     "id": 107257,
//     "name": "Las Tablas Colombian Steak House",
//     "address": "2942 N Lincoln Ave",
//     "city": "Chicago",
//     "state": "IL",
//     "area": "Chicago / Illinois",
//     "postal_code": "60657",
//     "country": "US",
//     "phone": "7738712414",
//     "lat": 41.935137,
//     "lng": -87.662815,
//     "price": 2,
//     "reserve_url": "http://www.opentable.com/single.aspx?rid=107257",
//     "mobile_reserve_url": "http://mobile.opentable.com/opentable/?restId=107257",
//     "image_url": "https://www.opentable.com/img/restimages/107257.jpg"
//   }

const RestaurantItem = (props) => {
    return (
        <TouchableOpacity style = {styles.container} onPress = {props.onSelect}>
            <Image
                style={styles.image}
                source={{ uri:props.restaurant.image_url}}
            />

            <Text style ={styles.name}>{props.restaurant.name}</Text>

        </TouchableOpacity>
    )
}

export { RestaurantItem };

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bdbdbd',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    image: {
        height: Dimensions.get('window').height / 3
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})