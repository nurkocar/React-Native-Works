import React from 'react';
import { SafeAreaView, View,Text, FlatList, StyleSheet } from 'react-native';

import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
    {
        id: 0,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/aa/fa/70/cafe-murano.jpg',
        name: 'Cafe Murano'
    },
    {
        id: 1,
        image: 'https://images.otstatic.com/prod/24164531/1/large.jpg',
        name: 'Seasons 52 - Altamonte Springs'
    },
    {
        id: 2,
        image: 'https://d1ralsognjng37.cloudfront.net/779ea345-a3ec-45a5-a9c2-3a9c1442fcce.jpeg',
        name: "Miller's Ale House"
    },
    {
        id: 3,
        image: 'https://cdn.usarestaurants.info/assets/uploads/e7cb0a9b5d7d1bf11a01895da1118c37_-united-states-florida-seminole-county-altamonte-springs-quickly-bistro-boba-407-630-6200htm.jpg',
        name: 'Quickly Bistro & Boba'
    },
    {
        id: 4,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/08/4a/a0/37/the-crepevine.jpg',
        name: 'The Crepevine'
    }
]



const Restaurants = ({ navigation }) => {

    const renderRestaurants = ({ item }) =>
        <RestaurantCard
            restaurant={item}
            onClicked={() => navigation.navigate('RestaurantPage', item)}
        />


    return (
        <SafeAreaView>
            <Text></Text>
            <View>
                <FlatList
                    data={restaurants}
                    renderItem={renderRestaurants}
                />
            </View>
        </SafeAreaView>
    )
}

export default Restaurants;