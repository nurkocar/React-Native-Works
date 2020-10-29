import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CityItem = (props) => {
  return (
    <TouchableOpacity style={styles.container}
    onPress={props.onSelect}
    >
      <Text style={styles.text}>{props.cityName}</Text>
    </TouchableOpacity>
  );
};

export {CityItem};

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        margin: 2,
        backgroundColor: "#fafafa",
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    }
})