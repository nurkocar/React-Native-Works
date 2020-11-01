// In App.js in a new project

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { initialState, reducer } from './context';

import {WelcomePage, Login} from './pages';


const store = createStore(reducer, initialState);

const Stack = createStackNavigator();

function Router() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name=">> Clarusway Login Page"
                        component={Login}
                        
                    />
                    <Stack.Screen
                        name='Welcome to Clarusway'
                        component={WelcomePage}
                        // options = {{
                        //     headerShown:false
                        // }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default Router;