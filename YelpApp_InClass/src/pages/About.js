import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerView}>
        <Text style={styles.header}>Restaurant App</Text>
        <Text style={styles.text}>
          Hello and welcome to Restaurant App, the place to find the best foods
          for every taste and occasion. Restaurant App was created in 2020 out
          of a passion for amazing food and service. We thoroughly check the
          quality of our goods, working only with reliable suppliers so that you
          only receive the best quality product. We at RestaurantApp believe in
          high quality and exceptional customer service. But most importantly,
          we believe shopping is a right, not a luxury, so we strive to deliver
          the best products at the most affordable prices, and ship them to you
          regardless of where you are located.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export {About};

const styles = StyleSheet.create({
  container: {flex:1,
    backgroundColor: '#ffab91',
  },
  header: {
      marginTop: 50,
      textAlign:"center",
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 40,
    paddingHorizontal: 40,
    fontStyle:"italic",
  },
});
