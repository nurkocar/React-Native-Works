import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {CityList, RestaurantDetail, About, RestaurantList} from './pages';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cities"
        component={CityList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Restaurants"
        component={RestaurantList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={RestaurantDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;

