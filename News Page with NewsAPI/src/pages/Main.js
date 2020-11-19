import React from 'react';
import { Text, FlatList, SafeAreaView, ImageBackground, Dimensions, TouchableHighlight, StyleSheet } from 'react-native';

const Main = (props) => {
  const imageBaseUrl = "https://images.unsplash.com/photo-";
  const imageParameters = "?auto=format&fit=crop&w=375&q=80";

  const dataSource = [
    {
      category: 'General',
      imageId: '1573812195421-50a396d17893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
    },
    {
      category: 'Technology',
      imageId: '1478358161113-b0e11994a36b'
    },
    {
      category: 'Sports',
      imageId: '1521412644187-c49fa049e84d'
    },
    {
      category: 'Health',
      imageId: '1526256262350-7da7584cf5eb'
    },
    {
      category: 'Business',
      imageId: '1542222024-c39e2281f121'
    },
    {
      category: 'Entertainment',
      imageId: '1511671782779-c97d3d27a1d4'
    },
    {
      category: 'Science',
      imageId: '1507413245164-6160d8298b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
    }
  ];

  const renderItemData = ({ item }) => {
    return (
      <TouchableHighlight style = {{flex:1}} onPress={() => props.navigation.navigate("NewsPage", { category: item.category })}>
        <ImageBackground
          source={{ uri: imageBaseUrl + item.imageId + imageParameters }}
          style={styles.image}>
          <Text style={styles.text}>{item.category}</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={dataSource}
        renderItem={renderItemData}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

export { Main };

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    height: Dimensions.get('window').width / 2
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    letterSpacing: 2,
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});