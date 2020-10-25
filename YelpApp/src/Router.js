// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CityPage from './pages/CityPage';
import Restaurants from './pages/Restaurants';
import RestaurantPage from './pages/RestaurantPage';

const Stack = createStackNavigator();


function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    // headerShown: false
                }}
            >
                <Stack.Screen
                    options = {{title:'CITIES'}}
                    name="CityPage"
                    component={CityPage}
                />

                <Stack.Screen
                    name="RestaurantPage"
                    component={RestaurantPage}
                />

                <Stack.Screen
                    name = 'Restaurants'
                    component={Restaurants}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;