import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
// import MyComponent from './components/MyComponent';



const App = () => {
  return (
  <View style = {styles.container}>
    <View style = {styles.imgContainer}>
      <Image
      style = {styles.img}
      source = {require('./images/shopping.png')} />
    </View>

    <View style = {styles.inputContainer}>
      <TextInput
      style = {styles.input}
      placeholder = 'Eposta giriniz...'
      keyboardType = 'email-address'
      placeholderTextColor = {'gray'}
      />
      <TextInput
      style = {styles.input}
      placeholder = 'Sifre giriniz...'
      // keyboardType = 'number-pad' 
      secureTextEntry = {true}
      placeholderTextColor = {'gray'}
      />
    </View>

    <View style ={styles.buttonContainer}>
      <TouchableOpacity>
        <Text style = {styles.btn}>Giris Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {styles.btn}>Kayit Ol</Text>
      </TouchableOpacity>
    </View>

  </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'#80cbc4',

  },

  imgContainer:{
    // flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },

  img: {
    width:120,
    height:120,
  },

  inputContainer:{
    // flex:1,
    alignItems:'center',
  },

  input:{
    backgroundColor:'white',
    borderRadius:7,
    width:350,
    margin:15
  },

  buttonContainer:{
    // flex:2,
    alignItems:'center',
    // justifyContent:'flex-start'
  },

  btn:{
    backgroundColor:'#546e7a',
    width:220,
    marginTop:10,
    textAlign:'center',
    color:'white',
    padding:18,
    paddingRight:40,
    paddingLeft:40,
    borderRadius:5,
    fontWeight:'bold',
    fontSize:15

  },

});

export default App;

