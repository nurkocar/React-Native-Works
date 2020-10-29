import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Linking,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RestaurantDetail = (props) => {
  const {selectedRestaurant} = props.route.params;
    console.log(selectedRestaurant);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={styles.container}>
        <Text style={styles.name}>{selectedRestaurant.name}</Text>
        <Image
          style={styles.image}
          source={{uri: selectedRestaurant.image_url}}
        />
        <View style={styles.infoContainer}>
          <Text>{selectedRestaurant.address}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{selectedRestaurant.area}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{selectedRestaurant.postal_code}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.reservationContainer}
      onPress= {() => {
        Linking.openURL(selectedRestaurant.mobile_reserve_url)
      }}
      >
        <Text style={styles.reservationText}>Make a Reservation</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '300',
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  infoContainer: {
    backgroundColor: '#b3e5fc',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  reservationContainer: {
    marginBottom: 30,
  },
  reservationText: {
    color: '#0288d1',
    textAlign:"center",
    fontWeight:"bold",
    fontSize:22,
  },
});
