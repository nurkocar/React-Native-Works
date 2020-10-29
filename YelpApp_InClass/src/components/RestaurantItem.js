import React from 'react';
import {
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const RestaurantItem = (props) => {
  const priceItem = '💲';

  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Image style={styles.image} source={{uri: props.restaurant.image_url}} />
      <View
        style={{
          flex: 1,
          // flexWrap: "wrap",
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <Text style={styles.name}>{props.restaurant.name}</Text>
        <Text style={styles.price}>{priceItem.repeat(props.restaurant.price)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81d4fa',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  image: {
    height: Dimensions.get('window').height / 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 70,
    marginVertical: 5,
  },
  price: {
    position: 'absolute',
    right: 0,
    fontSize: 20,
    marginVertical: 5,
  },
});
