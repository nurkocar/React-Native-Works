import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';

import { Button, RestaurantCard } from './components'

const Main = (props) => {

    const [restaurantData, setRestaurantData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    //ASYNC_AWAIT
    const fetchRestaurant = async () => {
        setLoading(true)
        const response = await axios.get('https://random-data-api.com/api/restaurant/random_restaurant');
        setRestaurantData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchRestaurant();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                {
                    isLoading ?

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size = 'large'/>
                        </View>
                        :
                        <RestaurantCard item={restaurantData} />
                }


                <Button
                    title="Suggest New Restaurant"
                    onNewRequest={() => fetchRestaurant()}
                />
            </View>
        </SafeAreaView>
    );
}

export default Main;