import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const RestaurantCard = ({restaurant, onClick}) => {
  return (
    <TouchableOpacity
    onPress= {() => onClick()}
    >
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: restaurant.image}} />
        <Text style={styles.text}>{restaurant.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F57C00',
    margin: 10,
    width: Dimensions.get('window').width * 0.9,
  },
  img: {
    width: 350,
    height: Dimensions.get('window').height / 3,
    margin: 10,
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
