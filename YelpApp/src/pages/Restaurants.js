import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  ImageEditor,
} from 'react-native';

import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  {
    id: 0,
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/07/aa/fa/70/cafe-murano.jpg',
    name: 'Cafe Murano',
    country: 'United Kingdom',
    address: '302 Treasa Canyon',
    tel: '300.702.2452 x7052',
    city: 'Altanta',
  },
  {
    id: 1,
    image: 'https://images.otstatic.com/prod/24164531/1/large.jpg',
    name: 'Seasons 52 - Altamonte Springs',
    country: 'United Kingdom',
    address: '51826 Dannie Valley',
    tel: '(913) 421-2145 x34804',
    city: 'Alton',
  },
  {
    id: 2,
    image:
      'https://d1ralsognjng37.cloudfront.net/779ea345-a3ec-45a5-a9c2-3a9c1442fcce.jpeg',
    name: "Miller's Ale House",
    country: 'United Kingdom',
    address: '5067 Wilfredo Brook',
    tel: '412.986.4384',
    city: 'Altanta',
  },
  {
    id: 3,
    image:
      'https://cdn.usarestaurants.info/assets/uploads/e7cb0a9b5d7d1bf11a01895da1118c37_-united-states-florida-seminole-county-altamonte-springs-quickly-bistro-boba-407-630-6200htm.jpg',
    name: 'Quickly Bistro & Boba',
    country: 'United Kingdom',
    address: '75030 Hilpert Landing',
    tel: '146.929.3332 x832',
    city: 'Alpine',
  },
  {
    id: 4,
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/08/4a/a0/37/the-crepevine.jpg',
    name: 'The Crepevine',
    country: 'United Kingdom',
    address: '263 Schowalter Burgs',
    tel: '745.849.4110',
    city: 'Alma',
  },
  {
    id: 5,
    image:
      'https://cdn.shortpixel.ai/client/q_lossless,ret_img/https://naturaljuicebar-banus.com/wp-content/uploads/2019/09/mostrador_frutas.png',
    name: 'Green Juice Bar',
    country: 'United Kingdom',
    address: 'Apt. 424 6636 Ziemann Mission',
    tel: '(356) 595-6032 x5755',
    city: 'Allentown',
  },
  {
    id: 6,
    image: 'https://loremflickr.com/500/500/restaurant',
    name: 'Salty Pub',
    country: 'United Kingdom',
    address: 'Suite 747 54379 Lane Junction',
    tel: '1-765-427-7874 x2757',
    city: 'Allentown',
  },
  {
    id: 7,
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/04/25/10/dc/ming-moon-restaurant.jpg',
    name: 'Ming Moon Chinese Restaurant',
    country: 'United Kingdom',
    address: 'Suite 760 4890 Gleason Valley',
    tel: '760-376-0051 x96330',
    city: 'Allen',
  },
  {
    id: 8,
    image:
      'https://preview.redd.it/pihr1n8j8i231.jpg?width=960&crop=smart&auto=webp&s=9dd8743135e8a4c297717eb2f6c232cc6ef81cf4',
    name: 'Golden Burger',
    country: 'United Kingdom',
    address: 'Apt. 716 70450 Otis Curve',
    tel: '1-794-167-9920',
    city: 'Alsip',
  },
  {
    id: 9,
    image:
      'https://www.hot-dinners.com/images/stories/features/2019/thanksgiving/potus2.jpg',
    name: 'Thirsty Burger',
    country: 'United Kingdom',
    address: 'Suite 474 68886 Nilsa Mill',
    tel: '661-809-5093 x037',
    city: 'Alpharetta',
  },
  {
    id: 10,
    image:
      'https://www.hot-dinners.com/images/stories/features/2019/thanksgiving/sweetchic.jpg',
    name: 'SO Eats',
    country: 'United Kingdom',
    address: 'Suite 553 459 Willms Estates',
    tel: '(162) 149-1375 x5150',
    city: 'Allston',
  },
  {
    id: 11,
    image:
      'https://www.hot-dinners.com/images/stories/features/2019/thanksgiving/aquashard.jpg',
    name: 'Belly Spoon',
    country: 'United Kingdom',
    address: '13210 Conroy Trail',
    tel: '830.883.2607 x9549',
    city: 'Almonte',
  },
  {
    id: 12,
    image:
      'https://www.hot-dinners.com/images/stories/features/2019/thanksgiving/plaquemine.jpg',
    name: 'Golden Kitchen',
    country: 'United Kingdom',
    address: '263 Schowalter Burgs',
    tel: '745.849.4110',
    city: 'Alpine',
  },
  {
    id: 13,
    image:
      'https://www.hot-dinners.com/images/stories/features/2019/thanksgiving/hamyard.jpg',
    name: 'Fat Grill & Tap',
    country: 'United Kingdom',
    address: 'Suite 129 8818 Tajuana Plain',
    tel: '638.796.4719',
    city: 'Ambler',
  },
  {
    id: 14,
    image:
      'https://www.duluthnewstribune.com/incoming/article1732317.ece/alternates/BASE_LANDSCAPE/Chiles%20En%20Nogada%20a%20dish%20with%20roasted%20poblano%2C%20apricot%2C%20red%20rice%2C%20walnut%20cream%2C%20golden%20raisin%20butter%20pomegranate%20and%20goat%20cheese%20served%20during%20the%20Sazon%20de%20Puebla%20dinner%20at%20Lake%20Avenue%20Restaurant%20and%20Bar%20in%20Duluth%20earlier%20this%20month.%20Clint%20Austin%20%20caustin%40duluthnews.com',
    name: 'Red Steakhouse',
    country: 'United Kingdom',
    address: 'Apt. 822 629 Reuben Coves',
    tel: '1-369-014-3622 x7799',
    city: 'Alsip',
  },
];

const cities = restaurants.map((item) => {
  return item.city
})


const Restaurants = ({ route, navigation }) => {


  const { id, name } = route.params;

  const [searchValue, setSearchValue] = useState('');
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    setRestaurantList(restaurants);
  }, []);
  useEffect(() => {
    const filteredValue = restaurants.filter((item) => {
      const text = searchValue.toUpperCase();
      const cityName = item.name.toUpperCase();
      return cityName.indexOf(text) > -1;
    });
    setRestaurantList(filteredValue);
  }, [searchValue]);



  const renderRestaurants = cities.includes(name) ? ({ item }) => {


    if (item.city == name) {
      return (
        <RestaurantCard
          restaurant={item}
          onClick={() => navigation.navigate('RestaurantPage', item)}
        />
      )
    }
  } : console.warn('There is no restaurant in this city');

  return (
    <SafeAreaView>
      <Text style={styles.text}>{name} Restaurants</Text>
      <TextInput
        style = {styles.inputText}
        value={searchValue}
        placeholder="Search a restaurant.."
        onChangeText={(searchText) => setSearchValue(searchText)}
      />
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={restaurantList}
          renderItem={renderRestaurants}
        />
      </View>
    </SafeAreaView>
  );
}

export default Restaurants;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown',
    marginTop: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'brown',
  },
  inputText:{
    marginLeft:10,
    fontSize:20
  }
});
