import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// import { useNavigation } from '@react-navigation/native';

const CityCard = ({city, onClicked}) => {
  return (
    <TouchableOpacity style={styles.cityButton} onPress={() => onClicked()}>
      <Text style={styles.cityText}>{city.name}</Text>
    </TouchableOpacity>
  );
};

export default CityCard;

const styles = StyleSheet.create({
  cityButton: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  cityText: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 5,
  },
});
