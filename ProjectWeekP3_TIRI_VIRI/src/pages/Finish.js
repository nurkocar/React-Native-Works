import React from 'react';
import {SafeAreaView, View, FlatList, Text, Button} from 'react-native';

import {finishPage} from './styles';

import {MyButton} from '../components';

import {useSelector} from 'react-redux'

const Finish = (props) => {
  const userScore = useSelector(global => global.score);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
        <Text style={finishPage.text}>Your score is {userScore}</Text>
        <MyButton 
          title='Restart' 
          onSelect = {() => 
            props.navigation.navigate('Intro')
        } />
      </View>

    </SafeAreaView>
  );
};

export {Finish};
