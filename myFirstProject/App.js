import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';



const App = () => {

  const myName = 'Nur';
  const isAdmin = true;

  function myFunction(){

    return <Text style={styles.div}> Firtina basliyoooorrrrr!! </Text>

  }

  function myFunc(){

    if (isAdmin){
      return <Text style={{fontSize:20}}> Admin Kullanicisi </Text>
    }else{
      return null
    }

  }

  function myFun(congrats){

    return <Text>{congrats}</Text>

  }

  function myArray(){

    const myArr = ['Izmir', 'Istanbul', 'Ankara', 'Adana'];

    return myArr.map((city) => {
      return <Text>{city} Sehri</Text>
    })

  }


  return (
    //Bu katman UI threadde calisir
    //<> //fragment yapisi yeni ozellikmis. en dista ya bir fragment ya da bir en dis view olmali.
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY!</Text>
      </View>

      <MyComponent />

      {myFunction()}

      <Text style={styles.divText}>Hosgeldin {myName} ✌</Text>

      {myFunc()}

      <Text style={styles.divText2}>React Native Modul 1: Giris</Text>

      {myFun('Hooooray!')}

      {myArray()}
      
    </View>

    //</>
  );
};

export default App;

const styles = StyleSheet.create({
  // Bu katman Native thread de calisir.
  container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 7,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  div: {
    textAlign: "center",
    borderRadius: 10,
    margin: 50,
    padding: 15,
    backgroundColor: 'plum',
    height: 50,
    width: 300,
  },
  divText: {
    color: 'plum',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  divText2: {
    paddingTop: 30,
    color: 'plum',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});
