import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';

import CityCard from '../components/CityCard';



const cities = [
    {
        id: 0,
        name: 'Allen'
    },
    {
        id: 1,
        name: 'Allendale'
    },
    {
        id: 2,
        name: 'Allentown'
    },
    {
        id: 3,
        name: 'Allison Park'
    },
    {
        id: 4,
        name: 'Allston'
    },
    {
        id: 5,
        name: 'Alma'
    },
    {
        id: 6,
        name: 'Almonte'
    },
    {
        id: 7,
        name: 'Alpharetta'
    },
    {
        id: 8,
        name: 'Alpine'
    },
    {
        id: 9,
        name: 'Alsip'
    },
    {
        id: 10,
        name: 'Altamonte Springs'
    },
    {
        id: 11,
        name: 'Altanta'
    },
    {
        id: 12,
        name: 'Altemonte Springs'
    },
    {
        id: 13,
        name: 'Alton'
    },
    {
        id: 14,
        name: 'Alvaro Obregon'
    },
    {
        id: 15,
        name: 'Ambler'
    }
]

// navigation={this.props.navigation}

const CityPage = ({navigation}) => {


    const renderCities = ({ item }) =>

        <CityCard
            city={item}
            onClicked = {() => navigation.navigate('Restaurants')}
        />

    const [inputText, setInputText] = useState('');

    return (
        <SafeAreaView>
            <View>
                <Text>Bir sehir seciniz</Text>
                <TextInput
                    value={inputText}
                    placeholder='Bir sehir arayin..'
                    onChangeText={(searchText) => setInputText(searchText)}
                />
                <FlatList
                    data={cities}
                    renderItem={renderCities}
                />
            </View>
        </SafeAreaView>
    )
}

export default CityPage;