import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MyBox from './components/MyBox';
import MyButton from './components/MyButton';

const App = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./images/clarusway_logo.png')}
        />
      </View>
      <MyButton />
      <Text style={styles.welcome}>🚀 Welcome to our application! 🚀</Text>
      <Text style={{fontSize:18, textAlign:'center'}}>Please choose one of the following options.</Text>
      <MyBox />
    </View>



  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  logo: {
    marginTop:5,
    width: 400,
    height: 80,
    // borderBottomWidth:3,
    // borderColor:'black'
  },
  welcome:{
    fontSize:20,
    fontWeight:'700',
    textAlign:'center',
    margin:30,
    marginTop:40,
    padding:15,
    borderWidth:3,
    borderColor:'purple',
    borderRadius:7,
    // borderStyle:"dotted"
  }
});
