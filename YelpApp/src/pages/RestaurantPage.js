import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const RestaurantPage = ({route, navigation}) => {
  const {name, image, address, city, country, tel} = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: image}} />
      <View style={styles.address}>
        <View style={{margin: 20}}>
          <Text style={styles.restaurantName}>{name}</Text>
          <TouchableOpacity style={styles.restaurantDetails}>
            <Text style={styles.restaurantAdress}>🌐   {city} / {country}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restaurantDetails}>
            <Text style={styles.restaurantAdress}>🗺   {address}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restaurantDetails}>
            <Text style={styles.restaurantAdress}>📞   {tel}</Text>
          </TouchableOpacity>

          {/* <Text style={styles.restaurantName}>{city}</Text> */}
        </View>
        <TouchableOpacity style={styles.reservationButton}>
          <Text style={styles.reservation}>Rezervasyon Yaptır</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  address: {
    flex: 1,
    justifyContent: 'space-between',
  },

  img: {
    marginTop:20,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3,
    borderRadius:10
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    marginBottom: 5,
  },
  restaurantAdress: {
    backgroundColor: '#1d8ae5',
    margin: 3,
    color: 'white',
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
  },
  reservationButton: {
    // alignSelf: 'center',
  },
  reservation: {
    color: '#3f729f',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
  },
});
