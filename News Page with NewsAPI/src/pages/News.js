import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, Dimensions, TouchableHighlight, Linking } from 'react-native';


const News = (props) => {
  
  const [newsList, setnewsList] = useState([]);
  const { category } = props.route.params;


  const fetchMainData = async () => {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=tr&category=${category.toLowerCase()}&apiKey=`); // apiKey = .....here goes your own API key from NEWSAPI...
    console.log(response);
    setnewsList(response.data.articles);
    ;
  }

  useEffect(() => {
    fetchMainData();
  }, [])


  const renderItemNews = ({ item }) => {
    return (
      <TouchableHighlight onPress= {() => Linking.openURL(item.url)}>
        <View style={{ flex: 1, flexDirection: "row", padding: 10, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: "#eee" }}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: item.urlToImage }} />
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text>{item.title}</Text>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
              <Text>{item.source.name}</Text>
              <Text>{item.publishedAt}</Text>
            </View>
          </View>
        </View>

      </TouchableHighlight> 
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={newsList}
        renderItem={renderItemNews}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};




export { News };